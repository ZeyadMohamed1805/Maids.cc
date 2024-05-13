import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-return',
	standalone: true,
	imports: [],
	templateUrl: './return.component.html',
	styleUrl: './return.component.scss',
})
export class ReturnComponent {
	constructor(private router: Router) {}

	onGoBackClick(): void {
		this.router.navigateByUrl('users');
	}
}
