import { Injectable } from '@angular/core';
import { Employee } from '../components/employee/employee.component';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    devUrl: string = 'http://localhost:8080/employee'

    constructor(
        private http: HttpClient
    ) { }

    getAllEmployee(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.devUrl + '/' + 'all')
    }

    getCurrentEmployeeByID(id: number) {
        return this.http.get(this.devUrl + '/' + 'current' + '/' + id)
    }

    getMyProfileByID(id: number) {
        return this.http.get(this.devUrl + '/' + 'profile' + '/' + id)
    }

    createEmployee(employee: Employee) {
        return this.http.post(this.devUrl + '/' + 'create', employee)
    }
}