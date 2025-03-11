import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports:[FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.css']
})
export class ControlFlowComponent implements OnInit {
  public isShow = true;
  public isChecked = true;
  public name = '';
  cityList:string[]=[
    'Pune',
    'Mumbai',
    'Delhi',
    'Chennai',
  ]
  constructor() { }

  public display(value:boolean){ 
    this.isShow = value;
  }
  ngOnInit() {
  }

}
