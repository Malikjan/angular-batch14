import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  allUser = [
    {
      name: 'Ram', address: 'Pune', gender: 1,
      dateOfBirth: new Date(new Date().setUTCFullYear(1988, 11, 10)),
      salary: 25000
    },
    {
      name: 'Geeta', address: 'Mumabi', gender: 2,
      dateOfBirth: new Date(new Date().setUTCFullYear(1947, 1, 10)),
      salary: 15000
    },
    {
      name: 'Ramesh', address: 'Pune', gender: 1,
      dateOfBirth: new Date(new Date().setFullYear(1998, 7, 29)),
      salary: 10000
    },
    {
      name: 'Seema', address: 'Nagapur', gender: 2,
      dateOfBirth: new Date(new Date().setFullYear(2000, 1, 21)),
      salary: 20000
    }
  ]

  craeteUser() {
    this.allUser.push({
      name: 'Gopal', address: 'Rajkot', gender: 2,
      dateOfBirth: new Date(new Date().setFullYear(2005, 10, 21)),
      salary: 5000
    })
  }
}
