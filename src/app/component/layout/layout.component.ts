import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  imports: [RouterOutlet, RouterLink],
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {


  router = inject(Router);
  apiService = inject(ApiService);
  http = inject(HttpClient);

  constructor() {}

  ngOnInit() {
    this.apiService.tokenSubject$.subscribe((res: boolean) => {
      if (res) {
        const loggedData= localStorage.getItem('angular19Data');
        if(loggedData)
        {
          const loggedUser=JSON.parse(loggedData);
          const obj: any = {
            emailId: loggedUser.emailId,
            token: loggedUser.token,
            refreshToken: loggedUser.refreshToken,
          };
          this.http.post("https://projectapi.gerasim.in/api/UserApp/refresh", obj)
          .subscribe((result:any)=>{
            localStorage.setItem("angular19User",result.data.userId);
            localStorage.setItem("angular19Token",result.data.token);
            localStorage.setItem("angular19Data", JSON.stringify(result.data));
            this.apiService.tokenRecieved$.next(true);
          })
        }
      }
    });
  }

  onLogOff() {
    localStorage.removeItem('angular19User');
    this.router.navigateByUrl('login');
  }

 
}
