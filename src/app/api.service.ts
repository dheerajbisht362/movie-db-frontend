import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "http://localhost:3000"

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) { }

  public login(body: any) {
    return this.httpClient.post(`${this.baseUrl}/login`, JSON.stringify(body))
      .pipe(catchError(error => this.catchLoginError(error)))
  }

  public searchMovie() { }

  catchLoginError(error: any): Observable<Response> {
    if (error && error.error && error.error.message) {
      let snackBarRef = this.snackBar.open(error.error.message, 'Close');
      alert(error.error.message)
    } else if (error && error.message) {
      let snackBarRef = this.snackBar.open(error.message, 'Close');
      alert(error.message)
    } else {
      let snackBarRef = this.snackBar.open(error, 'Close');
      alert(JSON.stringify(error))
    }

    return throwError(error)
  }
}
