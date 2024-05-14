import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDivider } from '@angular/material/divider';
import { TitleCasePipe } from '@angular/common';
import { SearchService } from '../../services/search/search.service';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [TitleCasePipe, RouterLink, MatDivider],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class FooterComponent {
	footerLinks: string[] = ['home', 'users'];

	constructor(public searchService: SearchService) {}
}
