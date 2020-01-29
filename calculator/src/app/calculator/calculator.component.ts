import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  currentNumber= "0";
  firstOperand = null;
  secondOperand = null;
  // sum: number;
  operator = null;
  waitForSecondNumber = false;

  constructor() { }

  ngOnInit() {
  }

  getNumber(value) {
    console.log(value);
    if(this.waitForSecondNumber){
      this.currentNumber = value;
      this.waitForSecondNumber = false;
    }
    else{
      this.currentNumber === ''? this.currentNumber = value: this.currentNumber += value;
    }
  }

  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  clear() {
    this.currentNumber = '';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  doCalculation(op, secondOp) {
    switch (op) {
      case '+': return this.firstOperand += secondOp;
      case '-': return this.firstOperand -= secondOp;
      case '*': return this.firstOperand *= secondOp;
      case '/': return this.firstOperand /= secondOp;
      case '%': return this.firstOperand = secondOp /100;
      case '=': return secondOp;
    }
  }

  getOperation(op: string) {
    console.log(op);
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    }
    else if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);
  }

}
