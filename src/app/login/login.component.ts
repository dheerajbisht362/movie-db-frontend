import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
  constructor() {}
  
  onSubmit(loginForm: any) {
    const control = new FormControl('1', Validators.pattern('^[0-9a-zA-Z]+$'));
    console.log(control.errors);
    console.log(loginForm.value);
    //pasword length should be 8-16
  }

  ngOnInit(): void {
  }

}
