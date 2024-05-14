import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

@Component({
	selector: 'app-loading',
	standalone: true,
	imports: [MatDivider],
	templateUrl: './loading.component.html',
	styleUrl: './loading.component.scss',
})
export class LoadingComponent {}
