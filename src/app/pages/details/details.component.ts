import { Component } from '@angular/core';
import { ReturnComponent } from '../../components/details/return/return.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReturnComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

}
