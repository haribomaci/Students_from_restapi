import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsApiService {
  host = "http://localhost:300/";
  constructor(
    private http: HttpClient
  ) { }

  getStudent(){

    let endpoint="students";
    let url = this.host + endpoint;

    return this.http.get<any>(url)
  }
  getScore(){

    let endpoint="scores";
    let url = this.host + endpoint;

    return this.http.get<any>(url)
  }
}
