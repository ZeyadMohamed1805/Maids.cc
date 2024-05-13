import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	private baseUrl: string = 'https://reqres.in/api';

	constructor(private http: HttpClient) {}

	get<T>(endPoint: string): Observable<T> {
		return this.http.get<T>(`${this.baseUrl}${endPoint}`);
	}
}
