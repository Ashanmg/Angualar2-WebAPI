import { Component } from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee.component/employee.component.html'
})
export class EmployeeComponent {
    firstname: string = "Ashan";
    lastname: string = "Madushanka";
    gender: string = "Male";
    age: number = 21;
}