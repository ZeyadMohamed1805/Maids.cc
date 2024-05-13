import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'users' },
	{ path: 'users', component: UsersComponent },
	{ path: 'users/:id', component: DetailsComponent },
];
