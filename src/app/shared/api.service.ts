// <!--
// File: student.componnt.html
// Author: Tóth Júlia
// Copyright: 2023, Tóth Júlia
// Group: Szoft 2/n
// Date: 2023-03-21
// Github: https://github.com/haribomaci/
// Licenc: GNU GPL
// -->

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsApiService {
  host = "http://localhost:3000";
  constructor(
    private http: HttpClient
  ) { }

  getStudent(){

    let endpoint="students";
    let url = this.host + "/" + endpoint;

    return this.http.get<any>(url)
  }
  getScore(){

    let endpoint="scores";
    let url = this.host + "/" + endpoint;

    return this.http.get<any>(url)
  }
}
