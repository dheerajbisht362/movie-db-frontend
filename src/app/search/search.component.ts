import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../authService/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  currentUser:Object ={}
  constructor(
    public authService:AuthService,
  ) { 
  }

  ngOnInit(): void {
    const res = this.authService.getToken()
    console.log(res)
  }

}
