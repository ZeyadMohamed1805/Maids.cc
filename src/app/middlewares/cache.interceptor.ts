import { HttpHandlerFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export const cacheInterceptor = (
	request: HttpRequest<any>,
	next: HttpHandlerFn
) => {
	const baseUrl: string = 'https://reqres.in/api';
	const url = request.url.replace(baseUrl, '');

	return next(request).pipe(
		tap((response) => {
			if (response instanceof HttpResponse) {
				localStorage.setItem(url, JSON.stringify(response.body));
			}
			return response;
		}),
		catchError((error) => {
			return throwError(() => new Error(error));
		})
	);
};
