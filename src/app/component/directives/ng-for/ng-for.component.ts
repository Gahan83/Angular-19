import { CommonModule, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../../model/student';
import { NaPipe } from '../../../pipe/na.pipe';
import { ProgressBarComponent } from '../../../reusable/progress-bar/progress-bar.component';
import { TabsComponent } from "../../../reusable/tabs/tabs.component";


@Component({
  selector: 'app-ng-for',
  imports: [CommonModule, FormsModule, UpperCasePipe,
    LowerCasePipe, JsonPipe, DatePipe, NaPipe,
    ProgressBarComponent, TabsComponent],
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  currentDate: Date = new Date();
  courseName: string="Gahan";
  forTabs:string[]=['Tab1','Tab2','Tab3'];
  studentObj:any={
    id: 1,
    name: 'John Doe', 
    age: 20
  }

  citys:string[]=['Bangalore','Mumbai','Delhi','Chennai','Kolkata'];
  students: Student[] = [
    { id: 1, name: 'John Doe', attendance: 25 },
    { id: 2, name: 'Jane Smith', age: 22 ,attendance: 100},
    { id: 3, name: 'Jim Brown', age: 21 ,attendance: 75},
    { id: 4, name: 'Jack White', age: 23 ,attendance: 50},
  ];
  constructor() { }

  ngOnInit() {
  }

}
