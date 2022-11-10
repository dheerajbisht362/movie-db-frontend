import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ApiService } from '../api.service';
import { AuthService } from '../authService/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  currentUser:Object ={}
  movies:any = []
  isLogged = false
  constructor(
    public authService:AuthService,
    private apiSerivce: ApiService,
    private _snackBar :MatSnackBar
  ) { 
  }

  ngOnInit(): void {
    this.isLogged = this.authService.isLoggedIn;
  }
  onSubmit(searchForm: any) {

    if(searchForm.value.search){
      this.apiSerivce.searchMovie(searchForm.value)
      .pipe(catchError(error => this.handleError(error))).subscribe((data)=>{
        console.log(data);
        this.movies = data;
      })
      searchForm.value.search =""
    }else{
      this._snackBar.open("Enter movie to search","X");
    }

  }

    // Error
    handleError(error: HttpErrorResponse) {
    console.log(error)
    let msg = '';
    if (error.error.message) {
      // client-side error
      msg = error.error.message;
      console.log(msg)
      this._snackBar.open(msg,"X");
    } else {
      // server-side error
      msg = `Error: ${error.status}\nMessage: ${error.message}`;
      this._snackBar.open(msg,"X");
    }
    const err = new Error(msg); 
    return throwError(() => err);
  }
}
