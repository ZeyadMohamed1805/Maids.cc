import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiService', () => {
	let service: ApiService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});
		service = TestBed.inject(ApiService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('get', () => {
		it('should return an observable of the generic type inserted', () => {
			const expected = new Observable<Array<any>>();
			const data = service.get<Array<any>>('users');

			expect(typeof data).toEqual(typeof expected);
		});
	});
});
