import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  imports: [NgClass],
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  @Input() tabs: string[] = [];
  
  @Output() onTabClicked = new EventEmitter<string>();

  public currentTab:string='';
  constructor() {}

  onTabChange(tab: string) {
    this.currentTab = tab;
    this.onTabClicked.emit(tab);
  }

  ngOnInit() {
    this.currentTab = this.tabs[0];
  }
}
