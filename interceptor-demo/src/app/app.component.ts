import { Component } from '@angular/core';
import { EmployeeService, Employee } from './services/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptor-demo';

  allEmployee: Observable<Employee[]>

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.allEmployee = this.employeeService.getAllEmployee()
  }

  next() {
    this.employeeService.getCurrentEmployeeByID(10).subscribe()
  }
}
