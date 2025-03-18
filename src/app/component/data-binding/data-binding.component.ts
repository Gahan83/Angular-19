import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  firstName: string = 'John';
  lastName: string = 'Doe';
  age: number = 30;
  currentDateTime: Date = new Date();
  city: string = '';
  constructor() {
    console.log('DataBindingComponent.constructor()');
  }

  showWelcomeMessage() {
    alert('Welcome to Angular 19');
  }

  onCityChange() {
    alert('City Changed');
  }

  ngOnInit() {}
}
