import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-not-found',
	standalone: true,
	imports: [],
	templateUrl: './not-found.component.html',
	styleUrl: './not-found.component.scss',
})
export class NotFoundComponent implements OnInit {
	message: string | null = null;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.setMessage(this.getUserParam());
	}

	getUserParam(): string | undefined {
		return this.activatedRoute.snapshot.queryParams['user'];
	}

	setMessage(userParam: string | undefined): void {
		if (userParam) this.message = `There Is No User With Id ${userParam}`;
		else {
			this.message = 'The Page You Are Requesting Does Not Exist';
		}
	}

	onGoHomeClick() {
		this.router.navigateByUrl('users');
	}
}
