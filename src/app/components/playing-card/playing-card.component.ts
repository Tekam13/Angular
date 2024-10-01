import { Component, Input } from '@angular/core';
import { Monster } from '../../Models/Model.Monster';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {
    @Input() monster: Monster= new Monster()
}
