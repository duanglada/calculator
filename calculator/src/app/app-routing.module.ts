import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { TestcalComponent } from './testcal/testcal.component';


const routes: Routes = [
  {
    path: "testcal",
    component: CalculatorComponent
  },
  {
    path: "",
    component: TestcalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
