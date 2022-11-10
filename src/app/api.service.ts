import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "https://enigmatic-mountain-70088.herokuapp.com"

  constructor(private httpClient: HttpClient, private _snackBar: MatSnackBar) { }

  searchMovie({search}:any) {
    return this.httpClient.get(`${this.baseUrl}/movies/${search}`)
  }
}
