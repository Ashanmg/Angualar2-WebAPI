import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name }}</h1>
                <my-employee-list></my-employee-list>`

})
export class AppComponent  { name = 'Employee Details!!!'; }
