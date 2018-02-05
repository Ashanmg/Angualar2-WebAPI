import { Injectable } from '@angular/core';
import { IEmployee } from '../employee.component/employee'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class EmployeeService {

    public constructor(private httpService: Http) {

    }

    getEmployee(): Observable<IEmployee[]> {
        return this.httpService.get("http://localhost:32253/api/Employee/")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handdleError);     
    }

    handdleError(error: Response) {
        return Observable.throw(error);
    }
}