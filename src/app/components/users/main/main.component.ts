import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CardComponent } from '../card/card.component';
import { UserService } from '../../../services/user/user.service';
import { TUser, TUserResponse } from '../../../types/user';

@Component({
	selector: 'app-main',
	standalone: true,
	imports: [MatPaginator, CardComponent],
	templateUrl: './main.component.html',
	styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
	searching: boolean = false;
	response: TUserResponse | null = null;

	constructor(private userService: UserService) {}

	ngOnInit(): void {
		this.getUsers(1);
	}

	onPageClick(event: any): void {
		this.getUsers(event.pageIndex + 1);
	}

	getUsers(page: number): void {
		this.userService.getUsersPage(page).subscribe((response) => {
			this.response = response;
		});
	}
}
