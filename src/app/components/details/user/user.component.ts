import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';

@Component({
	selector: 'app-user',
	standalone: true,
	imports: [],
	templateUrl: './user.component.html',
	styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
	constructor(private userService: UserService) {}

	ngOnInit(): void {
		this.userService
			.getUserDetails(5)
			.subscribe((response) => console.log(response));
	}
}
