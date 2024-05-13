import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CardComponent } from '../card/card.component';

@Component({
	selector: 'app-main',
	standalone: true,
	imports: [MatPaginator, CardComponent],
	templateUrl: './main.component.html',
	styleUrl: './main.component.scss',
})
export class MainComponent {
	searching: boolean = false;

	onPageClick(event: any) {}
}
