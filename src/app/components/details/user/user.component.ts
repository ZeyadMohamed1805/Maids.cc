import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { TUser } from '../../../types/user';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDivider } from '@angular/material/divider';
import { LoadingComponent } from '../loading/loading.component';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-user',
	standalone: true,
	imports: [MatDivider, LoadingComponent],
	templateUrl: './user.component.html',
	styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit, OnDestroy {
	user: TUser | null = null;
	subscriptions: Subscription = new Subscription();

	constructor(
		private userService: UserService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.getUserIdFromParams();
	}

	getUser(id: number): void {
		const subscription = this.userService.getUserDetails(id).subscribe({
			next: (response) => {
				this.user = response.data;
			},
			error: () => {
				this.router.navigateByUrl(`not-found?user=${id}`);
			},
		});

		this.subscriptions.add(subscription);
	}

	getUserIdFromParams(): void {
		const subscription = this.activatedRoute.params.subscribe((params) => {
			this.getUser(params['id']);
		});

		this.subscriptions.add(subscription);
	}

	ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}
}
