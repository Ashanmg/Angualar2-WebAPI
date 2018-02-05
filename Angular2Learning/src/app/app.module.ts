import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee.component/employee.component';
import { EmployeeComponentList } from './employee.component/employee.component.list';
import { EmployeeTitlePipe } from './employee.component/employee.Title.Pipe';
import { EmployeeCountComponent } from './employee.component/employeeCount.component';

import { EmployeeService } from './employee.service/employee.services';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    providers: [EmployeeService],
    declarations: [AppComponent, EmployeeComponent, EmployeeComponentList, EmployeeTitlePipe, EmployeeCountComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
