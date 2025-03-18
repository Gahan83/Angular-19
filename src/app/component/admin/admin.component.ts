import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-admin',
  imports:[RouterLink],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  http=inject(HttpClient);
  apiService=inject(ApiService);
  constructor() { }

  ngOnInit() {
    this.getUsers();
    this.apiService.tokenRecieved$.subscribe((res:boolean)=>{
      if(res)
      {
        this.getUsers();
      }
    });
  }

  getUsers()
  {
    this.http.get("https://projectapi.gerasim.in/api/UserApp/GetAllUsers")
    .subscribe((result:any)=>{
      console.log(result);
    },
    error=>{
      console.log(error);
    });
  }

}
