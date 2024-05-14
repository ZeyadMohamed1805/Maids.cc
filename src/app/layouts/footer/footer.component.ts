import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatDivider } from '@angular/material/divider';
import { TitleCasePipe } from '@angular/common';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [TitleCasePipe, RouterLink, MatDivider],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class FooterComponent {
	footerLinks: string[] = ['home', 'users'];

	constructor(private router: Router) {}

	onSearchSubmit(searchValue: string) {
		this.router.navigateByUrl(`/users/${searchValue}`);
	}
}
