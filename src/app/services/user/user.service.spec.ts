import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { TUserDetailsResponse, TUserResponse } from '../../types/user';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserService', () => {
	let service: UserService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});
		service = TestBed.inject(UserService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('getUsersPage', () => {
		it('should return an observable response type', () => {
			const expected = new Observable<TUserResponse>();
			const received = service.getUsersPage(1);

			expect(typeof expected).toEqual(typeof received);
		});
	});

	describe('getUserDetails', () => {
		it('should return an observable response type', () => {
			const expected = new Observable<TUserDetailsResponse>();
			const received = service.getUserDetails(1);

			expect(typeof expected).toEqual(typeof received);
		});
	});
});
