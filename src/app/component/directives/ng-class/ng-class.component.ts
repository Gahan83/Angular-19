import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng-class',
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
 divColor:string='bg-success'
 isChecked:boolean = false;
 display:string = '';
  constructor(private readonly router: Router) { }

  public changeColor(className:string): void{
    this.divColor = className;
  }

  public navigateTo()
  {
    this.router.navigate(['/ng-style']);
  }

  ngOnInit() {
  }

}
