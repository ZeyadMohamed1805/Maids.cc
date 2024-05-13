import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	constructor(private http: HttpClient) {}

	get<T>(endPoint: string): Observable<T> {
		return this.http.get<T>(`${process.env.BASE_URL}${endPoint}`);
	}
}
