import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { IUserService } from '../../interfaces/user';
import { TUser, TUserResponse } from '../../types/user';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UserService implements IUserService {
	constructor(private apiService: ApiService) {}

	getUsersPage(page: number): Observable<TUserResponse> {
		return this.apiService.get<TUserResponse>(`/users?page=${page}`);
	}

	getUserDetails(id: number): Observable<TUser> {
		return this.apiService.get<TUser>(`users/${id}`);
	}
}
