import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  bgColor: string = "";
  isChecked:boolean = true;
  myCss:any={
    'background-color':'teal',
    'font-size':'20px',
    'color':'white'
  }
  constructor() { }
  public changeBgColor(color: string) {
    this.bgColor = color;
  }
  ngOnInit() {
  }

}
