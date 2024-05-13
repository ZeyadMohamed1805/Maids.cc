import { Component } from '@angular/core';
import { MatInput } from '@angular/material/input';
import {
	MatAutocomplete,
	MatAutocompleteTrigger,
	MatOption,
} from '@angular/material/autocomplete';
import { RouterLink } from '@angular/router';
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

	onSearchSubmit(searchValue: string) {
		console.log(searchValue);
	}
	onSearchChange(searchValue: string) {
		console.log(searchValue);
	}
}
