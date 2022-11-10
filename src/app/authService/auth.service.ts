import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../shared/users';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
 
  constructor(private http: HttpClient, public router: Router, private _snackBar:MatSnackBar) {}

  signIn(user: User) {
    return this.http
      .post<any>(`${this.endpoint}/login`, user)
      .pipe(catchError(error => this.handleError(error)))
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
          this.router.navigate(['search/']);
          this._snackBar.open("Logged in success","X");
      })
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
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