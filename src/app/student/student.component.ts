import { Component, OnInit } from '@angular/core';
import { StudentsApiService } from '../shared/students-api.service';

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
