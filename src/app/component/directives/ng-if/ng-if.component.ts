import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [ CommonModule,FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  display:boolean=true;
  Name:string="";
  EName:string="";
  constructor() { }

  hide(){
    this.display=!this.display;
  }
  show(){
    this.display=true;
  }

  ngOnInit() {
  }

}
