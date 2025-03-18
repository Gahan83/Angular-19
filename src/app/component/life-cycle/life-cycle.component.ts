import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, AfterViewInit, AfterViewChecked,
AfterContentInit,AfterContentChecked, OnDestroy{

  constructor() { 
    console.log('constructor');
    //intialization of variables
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    //api call
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit',performance.now());
    //viewChild, Third part, reference of
  }

  ngAfterViewChecked(): void {
   console.log('ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
   console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
