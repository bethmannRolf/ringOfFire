import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatInputModule,  FormsModule, MatDialogModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {

  name: string = ''

  onNoClick(){

  }


}
