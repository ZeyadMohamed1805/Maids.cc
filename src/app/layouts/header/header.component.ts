import { Component } from '@angular/core';
import { MatInput } from '@angular/material/input';
import {
	MatAutocomplete,
	MatAutocompleteTrigger,
	MatOption,
} from '@angular/material/autocomplete';
import { Router, RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [
		RouterLink,
		TitleCasePipe,
		MatInput,
		MatAutocomplete,
		MatAutocompleteTrigger,
		MatOption,
	],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	searching: boolean = false;
	options: string[] = ['One', 'Two', 'Three'];

	constructor(private router: Router) {}

	onSearchSubmit(searchValue: string) {
		this.router.navigateByUrl(`/users/${searchValue}`);
	}
}
