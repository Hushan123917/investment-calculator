
import{Component, computed, inject} from '@angular/core';
import { InvestmentService } from '../user-input/investment.service';

@Component({
  selector:'app-investment-results',

  templateUrl:'./investment-results.component.html',
  styleUrl:'./investment-results.component.css'


})
export class InvestmentResultsComponents{
  private invesmentService = inject (InvestmentService);
   results = computed(() => this.invesmentService.resultData);


  }
