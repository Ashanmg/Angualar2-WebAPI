"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeComponentList = /** @class */ (function () {
    function EmployeeComponentList() {
        this.selectedEmployeeCountRadioButton = 'All';
        this.employees = [
            { code: 'empl01', name: 'Ashan', gender: 'Male', salary: 500000 },
            { code: 'empl02', name: 'Madushan', gender: 'Male', salary: 400000 },
            { code: 'empl03', name: 'Kasun', gender: 'Male', salary: 600000 },
            { code: 'empl04', name: 'Nuwan', gender: 'Male', salary: 800000 }
        ];
    }
    EmployeeComponentList.prototype.getEmployee = function () {
        this.employees = [
            { code: 'empl01', name: 'Ashan', gender: 'Male', salary: 500000 },
            { code: 'empl02', name: 'Madushan', gender: 'Male', salary: 400000 },
            { code: 'empl03', name: 'Kasun', gender: 'Male', salary: 600000 },
            { code: 'empl04', name: 'Nuwan', gender: 'Male', salary: 800000 },
            { code: 'empl05', name: 'Nishadi', gender: 'Female', salary: 300000 }
        ];
    };
    EmployeeComponentList.prototype.trackByEmployeeCode = function (index, employee) {
        return employee.code;
    };
    EmployeeComponentList.prototype.getTotalEmployeeCount = function () {
        return this.employees.length;
    };
    EmployeeComponentList.prototype.getTotalMaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Male"; }).length;
    };
    EmployeeComponentList.prototype.getTotalFemaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Female"; }).length;
    };
    EmployeeComponentList.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    EmployeeComponentList = __decorate([
        core_1.Component({
            selector: 'my-employee-list',
            templateUrl: 'app/employee/employee.component.list.html'
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeComponentList);
    return EmployeeComponentList;
}());
exports.EmployeeComponentList = EmployeeComponentList;
//# sourceMappingURL=employee.component.list.js.map