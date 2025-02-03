import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { PlayerComponent } from "../player/player.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent],
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
  if (!this.pickCardAnimation) {
    
  
  const card = this.game.stack.pop();
  if (card !== undefined) {
    this.currentCard = card;
    console.log(this.currentCard)
    this.pickCardAnimation = true;
    // this.game.playedCards.push(this.currentCard);

setTimeout(() => {
  this.game.playedCards.push(this.currentCard);
  this.pickCardAnimation = false;
}, 1000);

  } else {
    console.warn('Keine Karten mehr im Stapel!');
  }
}
}




}

