import { Component } from '@angular/core';


export class InvestmentResultsComponents {

}
function calculateInvestmentResults(data:{
  initialInvestment:number,
  duration: number,
  expectedReturn: number,
  annualInvestment: number,}
) {
  const{initialInvestment,annualInvestment,expectedReturn,duration }=
  data;
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  return annualData;
}
