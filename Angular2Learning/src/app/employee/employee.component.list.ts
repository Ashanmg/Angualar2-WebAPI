import { Component } from '@angular/core';
import { IEmployee } from './employee';

@Component({
    selector: 'my-employee-list',
    templateUrl: 'app/employee/employee.component.list.html'
})

export class EmployeeComponentList {
    employees: IEmployee[];

    selectedEmployeeCountRadioButton: string = 'All';

    constructor() {
        this.employees = [
            { code: 'empl01', name: 'Ashan', gender: 'Male', salary: 500000 },
            { code: 'empl02', name: 'Madushan', gender: 'Male', salary: 400000 },
            { code: 'empl03', name: 'Kasun', gender: 'Male', salary: 600000 },
            { code: 'empl04', name: 'Nuwan', gender: 'Male', salary: 800000 }
        ]
    }

    getEmployee(): void{
        this.employees = [
            { code: 'empl01', name: 'Ashan', gender: 'Male', salary: 500000 },
            { code: 'empl02', name: 'Madushan', gender: 'Male', salary: 400000 },
            { code: 'empl03', name: 'Kasun', gender: 'Male', salary: 600000 },
            { code: 'empl04', name: 'Nuwan', gender: 'Male', salary: 800000 },
            { code: 'empl05', name: 'Nishadi', gender: 'Female', salary: 300000 }
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