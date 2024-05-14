import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { TUser } from '../../../types/user';
import { ActivatedRoute } from '@angular/router';
import { MatDivider } from '@angular/material/divider';

@Component({
	selector: 'app-user',
	standalone: true,
	imports: [MatDivider],
	templateUrl: './user.component.html',
	styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
	user: TUser | null = null;

	constructor(
		private userService: UserService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.getUserIdFromParams();
	}

	getUser(id: number): void {
		this.userService.getUserDetails(id).subscribe((response) => {
			this.user = response.data;
		});
	}

	getUserIdFromParams(): void {
		this.activatedRoute.params.subscribe((params) => {
			this.getUser(params['id']);
		});
	}
}
