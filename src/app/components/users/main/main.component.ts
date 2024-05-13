import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CardComponent } from '../card/card.component';
import { UserService } from '../../../services/user/user.service';
import { TUserResponse } from '../../../types/user';
import { LoadingComponent } from '../loading/loading.component';

@Component({
	selector: 'app-main',
	standalone: true,
	imports: [MatPaginator, CardComponent, LoadingComponent],
	templateUrl: './main.component.html',
	styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
	loading: boolean = true;
	response: TUserResponse | null = null;

	constructor(private userService: UserService) {}

	ngOnInit(): void {
		this.getUsers(1);
	}

	onPageClick(event: any): void {
		this.getUsers(event.pageIndex + 1);
	}

	getUsers(page: number): void {
		this.loading = true;
		this.userService.getUsersPage(page).subscribe((response) => {
			this.response = response;
		});
		this.loading = false;
	}
}
