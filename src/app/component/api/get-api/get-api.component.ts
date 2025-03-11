import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css']
})
export class GetApiComponent implements OnInit {
  public userList:any;
  public productList:any;
  constructor(private readonly http:HttpClient) { }


  ngOnInit() {
  }

  getUsers()
  {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any)=>{
        this.userList=result;
    });
  }
  getProducts()
  {
    this.http.get('https://fake-store-api.mock.beeceptor.com/api/products').subscribe((result:any)=>{
        this.productList=result;
    });
  }

}
