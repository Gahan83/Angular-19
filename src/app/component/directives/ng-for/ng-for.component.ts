import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../../model/student';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  citys:string[]=['Bangalore','Mumbai','Delhi','Chennai','Kolkata'];
  students: Student[] = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 },
    { id: 3, name: 'Jim Brown', age: 21 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
