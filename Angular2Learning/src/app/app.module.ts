import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeComponentList } from './employee/employee.component.list';
import { EmployeeTitlePipe } from './employee/employee.Title.Pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent, EmployeeComponentList, EmployeeTitlePipe, EmployeeCountComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
