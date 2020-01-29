import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcal',
  templateUrl: './testcal.component.html',
  styleUrls: ['./testcal.component.scss']
})
export class TestcalComponent implements OnInit {
  result: any = '';
  longbuttons: string[] = ['AC', 'CE','%'];
  num_and_op: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+'];

  private preValue: string = '';
  private curValue: string = '';

  add(value: string){
    if(this.result != ''){
      this.preValue = this.curValue;
      this.curValue = value;
    }

    if(value == 'AC'){
      this.result = '';
    } 
    else if(value == 'CE'){
      this.result = this.preValue != "="? this.result.slice(0, -1): this.result;
    } 
    else if(value == '='){
      this.result = eval(this.result);
    }
    else if(value == '%'){
      this.result = eval(this.result)/100;
    }
    else {
      this.result += value;
    }
  }

  constructor() { }

  ngOnInit() { }


}
