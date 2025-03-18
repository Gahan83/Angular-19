import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule],
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginObj: any = {
    userName: '',
    password: '',
  };

 apiLoginObj: any = 
    {
      "EmailId": "",
      "Password": ""
    }

  router = inject(Router);
  http = inject(HttpClient);
  constructor() {}

  public onSave() {
    // if (this.loginObj.userName == "admin" && this.loginObj.password == "1122") {
    //   this.router.navigateByUrl("admin");
    // } else {
    //   alert('Login Failed');
    // }

    this.http.post("https://projectapi.gerasim.in/api/UserApp/login",this.apiLoginObj)
    .subscribe((result: any) => {
      localStorage.setItem("angular19User",result.data.userId);
      this.router.navigateByUrl("admin")
    },
    error=>{
      alert("Login Failed");
    }
  );
  }
  ngOnInit() {}
}
