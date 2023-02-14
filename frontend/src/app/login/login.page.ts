import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'

import {HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private loginService: LoginService, private http: HttpClient, private router: Router) { 
    
  }

  ngOnInit() {
  }

  sendData(  username: any, password: any) {
    let loginJSON = {
      username: username.value,
      password: password.value
    };

    this.http.post("http://localhost:3000/signin", loginJSON)
    .subscribe( (res) => {
      localStorage.setItem("User", (loginJSON.username));
      localStorage.setItem("token", JSON.stringify(res));
      //console.log(localStorage.getItem("User"));
      this.router.navigate(['/home']);
    
    }
       , (err) => console.log(err));


    }

}
