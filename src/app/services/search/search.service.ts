import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ISearchService } from '../../interfaces/search';
import { Observable } from 'rxjs';
import { TSearchResponse } from '../../types/search';

@Injectable({
	providedIn: 'root',
})
export class SearchService implements ISearchService {
	constructor(private apiService: ApiService) {}

	getAllUserIds(): Observable<TSearchResponse> {
		return this.apiService.get<TSearchResponse>('/users');
	}
}
