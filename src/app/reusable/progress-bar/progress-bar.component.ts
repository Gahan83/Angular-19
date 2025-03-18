import { NgStyle } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  imports:[NgStyle],
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
@Input() progessBarValue:number | undefined=0;
  constructor() { }

  ngOnInit() {
  }

}
