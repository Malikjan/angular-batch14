import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/mployee.service';
import { Subscription, Observable } from 'rxjs';

export interface Employee {
  name: string,
  address: string,
  code: string
}

export interface Profile {
  employee: Employee
  photo: string
  department: string
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  allEmployeeSubscribtion: Subscription = new Subscription()

  allEmployee: Observable<Employee[]>

  // currentEmployeeSubscribtion: Subscription
  // myProfileSubscribtion: Subscription
  // createEmployeeSubscribtion: Subscription

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getAllEmployee()
  }

  getAllEmployee() {
    this.allEmployee = this.employeeService.getAllEmployee();


    // let allEmpSubscribtion = this.employeeService.getAllEmployee().subscribe(
    //   (allEmployee: Employee[]) => {
    //     this.allEmployee = allEmployee
    //   })

    // this.allEmployeeSubscribtion.add(allEmpSubscribtion)
  }

  getCurrentEmployeeByID(id: number) {
    let currentSubscribtion = this.employeeService.getCurrentEmployeeByID(id).subscribe(
      (employee: Employee) => {
        // 
      })

    this.allEmployeeSubscribtion.add(currentSubscribtion)
  }

  getMyProfileByID(id: number) {
    let profileSubscribtion = this.employeeService.getMyProfileByID(id).subscribe(
      (profile: Profile) => {
        // 
      })

    this.allEmployeeSubscribtion.add(profileSubscribtion)
  }

  createEmployee(employee: Employee) {
    let createSubscribtion = this.employeeService.createEmployee(employee).subscribe(
      (employee: Employee) => {
        // 
      })

    this.allEmployeeSubscribtion.add(createSubscribtion)
  }

  ngOnDestroy(): void {
    this.allEmployeeSubscribtion.unsubscribe()

    // this.currentEmployeeSubscribtion.unsubscribe()
    // this.myProfileSubscribtion.unsubscribe()
    // this.createEmployeeSubscribtion.unsubscribe()
  }
}
