import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/student';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})
export class ListStudentsComponent implements OnInit{
  http: HttpClient
  students: Array<Student>
  
  constructor(http: HttpClient) {
    this.http = http
    this.students = []
  }

  ngOnInit(): void {
    this.http
    .get<Array<Student>>('http://localhost:7115/Student')
    .subscribe(resp => {
      resp.map(x => {
        let s = new Student()
        s.id = x.id
        s.name = x.name
        s.neptun = x.neptun
        s.sumcredit = x.sumcredit
        s.image = x.image
        s.createSubjects(x.Subjects)
        this.students.push(s)
      })
      console.log(this.students)
    })
  }
}
