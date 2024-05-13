import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDivider } from '@angular/material/divider';
import {
	MatAutocomplete,
	MatAutocompleteTrigger,
	MatOption,
} from '@angular/material/autocomplete';
import { TitleCasePipe } from '@angular/common';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [
		TitleCasePipe,
		RouterLink,
		RouterTestingModule,
		MatDivider,
		MatAutocomplete,
		MatAutocompleteTrigger,
		MatOption,
	],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class FooterComponent {
	searching: boolean = false;
	footerLinks: string[] = ['home', 'users'];
	options: string[] = ['One', 'Two', 'Three'];

	onSearchSubmit(searchValue: string) {
		console.log(searchValue);
	}
	onSearchChange(searchValue: string) {
		console.log(searchValue);
	}
}
