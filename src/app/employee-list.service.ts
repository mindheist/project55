import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  constructor(private http: HttpClient) { }

  getEmployees(){
    return  [
      { "id":1,  "name": "Andrew", "age":25},
      { "id":2,  "name": "Jason",  "age":30},
      { "id":3,  "name": "Barbara","age":40},
      { "id":4,  "name": "Chad",   "age":50},
      { "id":5,  "name": "David",  "age":28}
    ];
  }
}
