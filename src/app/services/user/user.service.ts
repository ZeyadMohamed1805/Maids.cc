import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { IUserService } from '../../interfaces/user';
import { TUser } from '../../types/user';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UserService implements IUserService {
	constructor(private apiService: ApiService) {}

	getUsersPage(page: number): Observable<TUser[]> {
		return this.apiService.get<TUser[]>(`/users?page=${page}`);
	}

	getUserDetails(id: number): Observable<TUser> {
		return this.apiService.get<TUser>(`users/${id}`);
	}
}
