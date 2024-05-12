import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'users' },
	{ component: UsersComponent, path: 'users' },
];
