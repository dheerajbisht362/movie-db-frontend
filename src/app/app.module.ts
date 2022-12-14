import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterComponent } from './router/router.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { AppRouterModule } from './router/router.module';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button"
import { AuthInterceptor } from './authService/authInterceptor';
import {MatCardModule} from "@angular/material/card"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RouterComponent,
    LoginComponent,
    SearchComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRouterModule, FormsModule, NoopAnimationsModule, MatSnackBarModule, 
    MatInputModule,MatFormFieldModule, MatButtonModule,MatCardModule],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
