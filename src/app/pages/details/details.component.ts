import { Component } from '@angular/core';
import { ReturnComponent } from '../../components/details/return/return.component';
import { MatDivider } from '@angular/material/divider';
import { UserComponent } from '../../components/details/user/user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@Component({
	selector: 'app-details',
	standalone: true,
	imports: [
		MatDivider,
		ReturnComponent,
		UserComponent,
		HttpClientTestingModule,
	],
	templateUrl: './details.component.html',
	styleUrl: './details.component.scss',
})
export class DetailsComponent {}
