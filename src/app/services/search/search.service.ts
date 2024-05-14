import { Injectable } from '@angular/core';
import { ISearchService } from '../../interfaces/search';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class SearchService implements ISearchService {
	constructor(private router: Router) {}

	onSearchSubmit(searchValue: string) {
		this.router.navigateByUrl(`/users/${searchValue}`);
	}
}
