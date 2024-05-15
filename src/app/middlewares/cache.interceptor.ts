import { HttpHandlerFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CacheService } from '../services/cache/cache.service';

export const cacheInterceptor = (
	request: HttpRequest<any>,
	next: HttpHandlerFn
) => {
	const baseUrl: string = 'https://reqres.in/api';
	const endpoint: string = request.url.replace(baseUrl, '');
	const cacheService: CacheService = inject(CacheService);

	return next(request).pipe(
		tap((response) => {
			if (response instanceof HttpResponse) {
				cacheService.setCachedItem(endpoint, response.body);
			}
			return response;
		}),
		catchError((error) => {
			return throwError(() => new Error(error));
		})
	);
};
