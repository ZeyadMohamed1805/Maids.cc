import { HttpHandlerFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export function cacheInterceptor(
	request: HttpRequest<any>,
	next: HttpHandlerFn
) {
	const baseUrl: string = 'https://reqres.in/api';
	const cache = new Map<string, HttpResponse<any>>();
	const endpoints = new Set<string>(['/users?page=1', '/users?page=2']);
	const url = request.url.replace(baseUrl, '');

	if (endpoints.has(url)) {
		const cachedResponse = cache.get(request.url);

		if (cachedResponse) {
			return of(cachedResponse);
		}

		return next(request).pipe(
			tap((response) => {
				if (response instanceof HttpResponse) {
					cache.set(request.url, response);
				}
				return response;
			}),
			catchError((error) => {
				return throwError(error);
			})
		);
	}

	return next(request);
}
