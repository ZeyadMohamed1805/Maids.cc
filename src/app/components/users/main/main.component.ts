import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
	selector: 'app-main',
	standalone: true,
	imports: [MatPaginator],
	templateUrl: './main.component.html',
	styleUrl: './main.component.scss',
})
export class MainComponent {
	searching: boolean = false;

	onPageClick(event: any) {}
}
