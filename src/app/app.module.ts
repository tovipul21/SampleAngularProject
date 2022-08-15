import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Employee/employeelist.component';
import { EmployeeDetailComponent } from './Employee/employeedetail.component';
import { ConvertHyphensPipe } from './shared/pipes/GetSubString.pipe';
import { FormsModule } from '@angular/forms';
import { RatingComponent } from './shared/rating.component';

const appRoutes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employees/:id', component: EmployeeDetailComponent},
  {path: 'home', redirectTo:'/'},
  {path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    ConvertHyphensPipe,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
