import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { LoginComponent } from '../login/login.component';
import { SearchComponent } from '../search/search.component';
import { MatFormFieldModule } from "@angular/material/form-field";


const routes:Routes = [
  {path:"", component:HeaderComponent},
  {path:"login", component: LoginComponent},
  {path: "search", component:SearchComponent}
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),MatFormFieldModule 
  ],
  exports:[RouterModule]
})
export class AppRouterModule { }
