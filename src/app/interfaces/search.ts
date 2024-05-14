import { Observable } from 'rxjs';
import { TSearchResponse } from '../types/search';

export interface ISearchService {
	getAllUserIds(): Observable<TSearchResponse>;
}
