import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private apiService:ApiService) {}
  
  onSubmit(loginForm: any) {
    console.log(loginForm.value);
    this.apiService.login(loginForm.value).subscribe(res=>{
      console.log(res)
    })
  }

  ngOnInit(): void {
  }

}
