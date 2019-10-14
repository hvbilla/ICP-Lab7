import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    username: '',
    password: ''
  }
  constructor(private router: Router) { }

  ngOnInit() {

  }

  checkLogin() {
    console.log(this.login);

    let item = JSON.parse(localStorage.getItem('cred'));

    if(item.username == this.login.username && item.password == this.login.password)  {
      window.alert("Login success");

      this.router.navigate(['/home']);

    } else {
      window.alert("Login failed invalid username/password");
      this.router.navigate(['/login']);
    }

  }

}
