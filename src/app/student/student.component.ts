// <!--
// File: student.componnt.html
// Author: Tóth Júlia
// Copyright: 2023, Tóth Júlia
// Group: Szoft 2/n
// Date: 2023-03-21
// Github: https://github.com/haribomaci/
// Licenc: GNU GPL
// -->

import { Component, OnInit } from '@angular/core';
import { StudentsApiService } from '../shared/api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit{

  students: any = [];
  scores: any = [];

  constructor(
    private studentsApi: StudentsApiService
    ){}

  ngOnInit(): void {
      this.getStudent();
      this.getScore();
  }
  getStudent()
  {
    this.studentsApi.getStudent().subscribe({
      next: (students)=> {
        console.log(students);
        this.students = students;
        
      },
      error: (err) => {
        console.log(err);
        
      }
    });
  }
  getScore()
  {
    this.studentsApi.getScore().subscribe({
      next: (scores)=> {
        console.log(scores);
        this.scores = scores;
        
      },
      error: (err) => {
        console.log(err);
        
      }
    });
  }

}
