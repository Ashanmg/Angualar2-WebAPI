import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html'
})

export class EmployeeCountComponent {
    @Input() all: number;
    @Input() male: number;
    @Input() female: number;

    selectedRedioButtonValue: string = 'All';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    onRadioButtonSelectionChange(): void {
        this.countRadioButtonSelectionChanged.emit(this.selectedRedioButtonValue);
        console.log(this.selectedRedioButtonValue);
    }
}