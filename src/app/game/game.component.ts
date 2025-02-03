import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit{
pickCardAnimation = false;
game!: Game;
currentCard: string = '';
constructor(){

}

ngOnInit():void{
this.newGame();
}

newGame(){
  this.game = new Game();
  console.log(this.game)
}




takeCard() {
  const card = this.game.stack.pop();
  if (card !== undefined) {
    this.currentCard = card;
    this.pickCardAnimation = true;
  } else {
    console.warn('Keine Karten mehr im Stapel!');
  }
}





}

