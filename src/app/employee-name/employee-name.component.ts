import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-name',
  templateUrl: './employee-name.component.html',
  styleUrls: ['./employee-name.component.css']
})
export class EmployeeNameComponent implements OnInit {

  public employees = [
    { "id":1 , "name" : "Andrew" , "age":25},
    { "id":2, "name": "Jason", "age":30}

  ];

  constructor() { }

  ngOnInit() {
  }

}
