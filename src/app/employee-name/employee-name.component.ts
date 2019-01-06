import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from "src/app/employee-list.service";

@Component({
  selector: 'app-employee-name',
  templateUrl: './employee-name.component.html',
  styleUrls: ['./employee-name.component.css']
})
export class EmployeeNameComponent implements OnInit {

  public employees = [];

  constructor(private _employeelistService: EmployeeListService) { }

  ngOnInit() {
    this.employees = this._employeelistService.getEmployees()
  }

}
