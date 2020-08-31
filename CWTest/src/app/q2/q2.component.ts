import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css']
})
export class Q2Component implements OnInit {

  constructor() { }

  inputArrayString="";
  n;
  pattern = /[0-9]/;
  showCalculations = false;

  inputArrayNumbers = new Array();
  finalAnswer = 0;

  ngOnInit(): void {
  }

  onCalculate() {
    this.inputArrayNumbers = new Array();
    this.showCalculations = true;

    var stringToArray: any[] = this.inputArrayString.split(",", 100);
    stringToArray.forEach(element => {
      this.inputArrayNumbers.push(+element);
    });

    this.finalAnswer = this.calculateAnswer(this.inputArrayNumbers,this.n);

  }

  calculateAnswer(inputArrayNumbers,n){
    var maxSumArray:number[]=new Array();

     for (var i = 0; i < inputArrayNumbers.length; i++) {
      var tempSum=0;
      var k =+i.toString();
      for(var j=0;j<n;j++)
      {   
        try {
          tempSum+=inputArrayNumbers[k++];
        } catch (error) {
          tempSum+=0;
        }
      }
     
      maxSumArray.push(tempSum);
    }

    console.log(maxSumArray);
    
    return maxSumArray.sort((a,b) => b - a)[0];
  }

}
