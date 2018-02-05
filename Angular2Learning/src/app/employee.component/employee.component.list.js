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
var employee_services_1 = require("../employee.service/employee.services");
var EmployeeComponentList = /** @class */ (function () {
    function EmployeeComponentList(_employeeSerive) {
        this._employeeSerive = _employeeSerive;
        this.selectedEmployeeCountRadioButton = 'All';
        this.showMessage = "Data is loading... Please wait !";
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
    EmployeeComponentList.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeSerive.getEmployee()
            .subscribe(function (employee) { return _this.employees = employee; }, function (error) {
            _this.showMessage = "Something goes wrong with the service. Please try again.";
        });
    };
    EmployeeComponentList.prototype.getEmployee = function () {
        this.employees = [
            { code: 'empl01', name: 'Ashan', gender: 'Male', annualSalary: 500000 },
            { code: 'empl02', name: 'Madushan', gender: 'Male', annualSalary: 400000 },
            { code: 'empl03', name: 'Kasun', gender: 'Male', annualSalary: 600000 },
            { code: 'empl04', name: 'Nuwan', gender: 'Male', annualSalary: 800000 },
            { code: 'empl05', name: 'Nishadi', gender: 'Female', annualSalary: 300000 }
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
            templateUrl: 'app/employee.component/employee.component.list.html'
        }),
        __metadata("design:paramtypes", [employee_services_1.EmployeeService])
    ], EmployeeComponentList);
    return EmployeeComponentList;
}());
exports.EmployeeComponentList = EmployeeComponentList;
//# sourceMappingURL=employee.component.list.js.map