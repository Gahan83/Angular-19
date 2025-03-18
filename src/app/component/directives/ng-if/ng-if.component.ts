import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgressBarComponent } from '../../../reusable/progress-bar/progress-bar.component';

@Component({
  selector: 'app-ng-if',
  imports: [ CommonModule,FormsModule,ProgressBarComponent],
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  display:boolean=true;
  Name:string="";
  EName:string="";
  constructor(private router: Router) { }

  hide(){
    this.display=!this.display;
  }
  show(){
    this.display=true;
  }

  public navigateTo()
  {
    this.router.navigate(['/ng-for']);
  }
  
  ngOnInit() {
  }

}
