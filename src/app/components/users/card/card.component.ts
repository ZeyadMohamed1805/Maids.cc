import { Component, Input } from '@angular/core';
import {
	MatCard,
	MatCardActions,
	MatCardAvatar,
	MatCardContent,
	MatCardHeader,
	MatCardSubtitle,
	MatCardTitle,
} from '@angular/material/card';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
	selector: 'app-card',
	standalone: true,
	imports: [
		MatCard,
		MatCardHeader,
		MatCardTitle,
		MatCardAvatar,
		MatCardSubtitle,
		MatCardContent,
		MatCardActions,
	],
	templateUrl: './card.component.html',
	styleUrl: './card.component.scss',
})
export class CardComponent {
	@Input() user: User | null = null;

	constructor(private router: Router) {}

	onViewDetailsClick(): void {
		this.router.navigateByUrl(`/users/${this.user!.id}`);
	}
}
