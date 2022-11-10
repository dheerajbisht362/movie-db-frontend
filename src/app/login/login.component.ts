import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import { AuthService } from '../authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isLogged = false
  constructor(private authService:AuthService) {}
  
  onSubmit(loginForm: any) {
    console.log(loginForm.value);
    this.authService.signIn(loginForm.value)
  }

  ngOnInit(): void {
    this.isLogged = this.authService.isLoggedIn
  }

}
