import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees = [
    { "id":1 , "name" : "Andrew" , "age":25},
    { "id":2,  "name": "Jason", "age":30}
    { "id":3 , "name" : "Barbara" , "age":40},
    { "id":4,  "name": "Chad", "age":50}

  ];
  constructor() { }

  ngOnInit() {
  }

}
