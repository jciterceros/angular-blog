import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";
import { BigCardComponent } from "./components/big-card/big-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, MenuTitleComponent, BigCardComponent]
})
export class AppComponent {
  title = 'angular-blog';
}
