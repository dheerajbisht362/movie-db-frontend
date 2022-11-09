import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterComponent } from './router/router.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { AppRouterModule } from './router/router.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RouterComponent,
    LoginComponent,
    SearchComponent
  ],
  imports: [BrowserModule,AppRouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
