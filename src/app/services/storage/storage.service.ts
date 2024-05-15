import { Injectable } from '@angular/core';
import { IStorageService } from '../../interfaces/storage';

@Injectable({
	providedIn: 'root',
})
export class StorageService implements IStorageService {
	getItem<T>(key: string): T | null {
		let item: string | null = localStorage.getItem(key);

		if (item) {
			let parsedItem: T = JSON.parse(item);
			return parsedItem;
		}

		return null;
	}

	setItem<T>(key: string, value: T): void {
		localStorage.setItem(key, JSON.stringify(value));
	}

	removeItem(key: string): void {
		localStorage.removeItem(key);
	}
}
