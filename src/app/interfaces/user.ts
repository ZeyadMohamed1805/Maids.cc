import { TUserDetailsResponse, TUserResponse } from '../types/user';
import { Observable } from 'rxjs';

export interface IUserService {
	getUsersPage(page: number): Observable<TUserResponse>;
	getUserDetails(id: number): Observable<TUserDetailsResponse>;
}
