import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-temp-ng-container',
  templateUrl: './ng-temp-ng-container.component.html',
  imports: [NgFor,NgIf,NgTemplateOutlet],
  styleUrls: ['./ng-temp-ng-container.component.css']
})
export class NgTempNgContainerComponent implements OnInit {
  public isLoader:boolean=true;
  constructor() { 
    setTimeout(() => {
      this.isLoader=false;
    }, 3000);
  }

  students: any[]= [
      { id: 1, isActive:true, name: 'John Doe', attendance: 25 },
      { id: 2, isActive:false, name: 'Jane Smith', age: 22 ,attendance: 100},
      { id: 3, isActive:false, name: 'Jim Brown', age: 21 ,attendance: 75},
      { id: 4, isActive:true, name: 'Jack White', age: 23 ,attendance: 50},
    ];

  ngOnInit() {
  }

}
