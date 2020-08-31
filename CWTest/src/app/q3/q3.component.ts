import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.css']
})
export class Q3Component implements OnInit {

  constructor() { }
  inputArrayString="";
  n;
  inputArrayNumbers = new Array();
  finalOutcomeArray:any[]=new Array();


  ngOnInit(): void {
  }
  showCalculations=false;

  onSplit(){
    this.showCalculations=true;
    this.finalOutcomeArray=new Array();
    this.inputArrayNumbers = new Array();

    var stringToArray: any[] = this.inputArrayString.split(",", 100);
    stringToArray.forEach(element => {
      this.inputArrayNumbers.push(+element);
    });

    for (var i = 0; i < this.inputArrayNumbers.length; ) {
      var tempArray:number[]=new Array();
      
      for(var j=0;j<this.n;j++)
      {   
        try {
          var x = this.inputArrayNumbers[i++]
          if(x)
          {
            tempArray.push(x)
          }
        } catch (error) {
        }
      }
     
      this.finalOutcomeArray.push(tempArray);
    }
  }

}
