import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Monster } from './Models/Model.Monster';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  monster1!: Monster;

  constructor(){
    this.monster1= new Monster(),
    this.monster1.name= 'Pick',
    this.monster1.hp= 50,
    this.monster1.num= 'N°025 Monster',
    this.monster1.attackName = 'Watter Pro',
    this.monster1.attackPower= 80
  }
}
