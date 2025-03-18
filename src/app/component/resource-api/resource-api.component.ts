import { Component, OnInit, resource } from '@angular/core';

@Component({
  selector: 'app-resource-api',
  templateUrl: './resource-api.component.html',
  styleUrls: ['./resource-api.component.css']
})
export class ResourceApiComponent implements OnInit {
  userList=resource({
    loader:()=>{
      return fetch('https://json-placeholder.mock.beeceptor.com/users')
     .then((res)=>res.json() as Promise<any[]>)
    }
  })
  constructor() { }

  ngOnInit() {}

  reload()
  {
    this.userList.reload();
  }

}
