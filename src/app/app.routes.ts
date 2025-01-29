import { Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameComponent } from './game/game.component';
import { FooterComponent } from "./shared/components/footer/footer.component";

export const routes: Routes = [
    {path: '', component: StartScreenComponent },
    {path: 'game', component: GameComponent },
    {path:'footer', component: FooterComponent}
];
