import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee.component/employee.component';
import { EmployeeComponentList } from './employee.component/employee.component.list';
import { EmployeeTitlePipe } from './employee.component/employee.Title.Pipe';
import { EmployeeCountComponent } from './employee.component/employeeCount.component';
import { HomeComponent } from './home.component/home.component';
import { PageNotFoundComponent } from './others/pageNotFound.component';

import { EmployeeService } from './employee.service/employee.services';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employee', component: EmployeeComponentList },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    providers: [EmployeeService],
    declarations: [AppComponent, EmployeeComponent, EmployeeComponentList, EmployeeTitlePipe, EmployeeCountComponent, HomeComponent, PageNotFoundComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
