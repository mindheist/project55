import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from "src/app/employee-list.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees = [];

  constructor(private _employeelistingService: EmployeeListService) { }

  ngOnInit() {
    this._employeelistingService.getEmployees().subscribe(data => this.employees = data)
  }

}
