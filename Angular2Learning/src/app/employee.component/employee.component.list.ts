import { Component, OnInit} from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from '../employee.service/employee.services';

@Component({
    selector: 'my-employee-list',
    templateUrl: 'app/employee.component/employee.component.list.html'
})

export class EmployeeComponentList implements OnInit {
    employees: IEmployee[];

    selectedEmployeeCountRadioButton: string = 'All';
    showMessage: string = "Data is loading... Please wait !";

    constructor(private _employeeSerive: EmployeeService) {
        
    }

    /*
    * class constructor generally use for initialize the fields of the class and its sub classes.
    * it is automatically called when class is initiated from some where else.

    * ngOnInit is called after the constructor and it generally uses for performing tasks related
    * to angular bindings.
    * For example we can call all service calls from ngOnInit method.
    * Services usually get time to load. Since it not a good practice to call those things in the
    * constructor method. Instead of the we can use this ngOnInit since it is performing after loading
    * constructor of the class.
    */

    // all service we call from ngOnInit method rather than use in constructor.
    ngOnInit() {
        this._employeeSerive.getEmployee()
            .subscribe((employee: IEmployee[]) => this.employees = employee,
            error => {
                this.showMessage = "Something goes wrong with the service. Please try again."
            }); 
    }

    getEmployee(): void{
        this.employees = [
            { code: 'empl01', name: 'Ashan', gender: 'Male', annualSalary: 500000 },
            { code: 'empl02', name: 'Madushan', gender: 'Male', annualSalary: 400000 },
            { code: 'empl03', name: 'Kasun', gender: 'Male', annualSalary: 600000 },
            { code: 'empl04', name: 'Nuwan', gender: 'Male', annualSalary: 800000 },
            { code: 'empl05', name: 'Nishadi', gender: 'Female', annualSalary: 300000 }
        ]
    }

    trackByEmployeeCode(index: number , employee: any): string {
        return employee.code;
    }

    getTotalEmployeeCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }

    getTotalFemaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
}