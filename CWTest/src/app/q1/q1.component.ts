import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component implements OnInit {

  constructor() { }

  charArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  color="white";
  count=0;

  ngOnInit(): void {
  }

  generateRandomColor(){
    var colorString = "#";
    for(var i=0;i<6;i++)
    {
     var num =  Math.floor(Math.random() * 15);
     colorString += this.charArray[num];
    }

    this.color=colorString;
    this.count++;
  }

}
