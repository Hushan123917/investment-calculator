import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import type { InvestmentInput } from './investment-input.model';
import { InvestmentResultsComponents } from "./investment-results/investment-result.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,UserInputComponent, InvestmentResultsComponents],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true
})
export class AppComponent {

}
