import { Injectable } from '@angular/core';
import { ICacheService } from '../../interfaces/cache';

@Injectable({
	providedIn: 'root',
})
export class CacheService implements ICacheService {
	cachedResponse = new Map<string, any>();

	setCachedItem<T>(endpoint: string, response: T): void {
		this.cachedResponse.set(endpoint, response);
	}

	getCachedItem<T>(endpoint: string): T {
		return this.cachedResponse.get(endpoint);
	}
}
