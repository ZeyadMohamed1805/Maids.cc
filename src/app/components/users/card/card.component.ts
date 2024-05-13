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
import { LoadingComponent } from '../loading/loading.component';

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
}
