import { HttpHandlerFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export const cacheInterceptor = (
	request: HttpRequest<any>,
	next: HttpHandlerFn
) => {
	return next(request).pipe(
		tap((response) => {
			if (response instanceof HttpResponse) {
				localStorage.setItem(request.url, JSON.stringify(response));
			}
			return response;
		}),
		catchError((error) => {
			return throwError(() => new Error(error));
		})
	);
};
