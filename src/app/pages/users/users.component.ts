import { Component } from '@angular/core';
import { MainComponent } from '../../components/users/main/main.component';

@Component({
	selector: 'app-users',
	standalone: true,
	imports: [MainComponent],
	template: '<app-main />',
})
export class UsersComponent {}
