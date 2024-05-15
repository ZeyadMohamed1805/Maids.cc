import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CacheService } from '../cache/cache.service';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	private baseUrl: string = 'https://reqres.in/api';

	constructor(private http: HttpClient, private cacheService: CacheService) {}

	get<T>(endPoint: string): Observable<T> {
		const cacheResponse = this.cacheService.getCachedItem<T>(endPoint);
		if (cacheResponse) return of(cacheResponse);
		return this.http.get<T>(`${this.baseUrl}${endPoint}`);
	}
}
