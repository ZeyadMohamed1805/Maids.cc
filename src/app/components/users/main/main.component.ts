import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CardComponent } from '../card/card.component';
import { UserService } from '../../../services/user/user.service';
import { TUserResponse } from '../../../types/user';
import { LoadingComponent } from '../loading/loading.component';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-main',
	standalone: true,
	imports: [MatPaginator, CardComponent, LoadingComponent],
	templateUrl: './main.component.html',
	styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit, OnDestroy {
	loading: boolean = true;
	response: TUserResponse | null = null;
	subscriptions: Subscription = new Subscription();

	constructor(private userService: UserService) {}

	ngOnInit(): void {
		this.getUsers(1);
	}

	onPageClick(event: any): void {
		this.getUsers(event.pageIndex + 1);
	}

	getUsers(page: number): void {
		this.loading = true;

		const subscription = this.userService
			.getUsersPage(page)
			.subscribe((response) => {
				console.log(response);

				this.response = response;
			});

		this.subscriptions.add(subscription);

		this.loading = false;
	}

	ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}
}
