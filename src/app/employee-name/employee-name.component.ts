import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from "src/app/employee-list.service";

@Component({
  selector: 'app-employee-name',
  templateUrl: './employee-name.component.html',
  styleUrls: ['./employee-name.component.css']
})
export class EmployeeNameComponent implements OnInit {

  public employees = [];

  constructor(private _employeelistingService: EmployeeListService) { }
  
    ngOnInit() {
      this._employeelistingService.getEmployees().subscribe(data => this.employees = data)
    }
}
