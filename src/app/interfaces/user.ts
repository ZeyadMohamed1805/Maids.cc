import { TUser } from '../types/user';
import { Observable } from 'rxjs';

export interface IUserService {
	getUsersPage(page: number): Observable<TUser[]>;
	getUserDetails(id: number): Observable<TUser>;
}
