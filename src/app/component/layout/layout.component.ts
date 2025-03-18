import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  imports: [RouterOutlet],
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  router=inject(Router)
  onLogOff()
  {
    localStorage.removeItem("angular19User");
    this.router.navigateByUrl("login");
  }
  ngOnInit() {
  }

}
