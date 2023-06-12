import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from '../_models/subject';
import { Student } from '../_models/student';

@Component({
  selector: 'app-connect-student-to-subject',
  templateUrl: './connect-student-to-subject.component.html',
  styleUrls: ['./connect-student-to-subject.component.scss']
})
export class ConnectStudentToSubjectComponent implements OnInit{
  http: HttpClient
  snackBar: MatSnackBar
  subjects: Array<Subject>
  students: Array<Student>
  selectedStudentIdToRemove: string
  selectedSubjectIdToRemove: string
  selectedStudentIdToAdd: string
  selectedSubjectIdToAdd: string

  constructor(http: HttpClient, snackBar:MatSnackBar) {
    this.http = http
    this.snackBar = snackBar
    this.students = []
    this.subjects = []
    this.selectedStudentIdToRemove = ''
    this.selectedSubjectIdToRemove = ''
    this.selectedStudentIdToAdd = ''
    this.selectedSubjectIdToAdd = ''
  }

  ngOnInit(): void {
    this.http
    .get<Array<Student>>('backend-url')
    .subscribe(resp => {
      resp.map(x => {
        let s = new Student()
        s.id = x.id
        s.name = x.name
        s.neptun = x.neptun
        s.sumcredit = x.sumcredit
        s.image = x.image
        this.students.push(s)
      })
    })

    this.http
    .get<Array<Subject>>('backend-url')
    .subscribe(resp => {
      resp.map(x => {
        let s = new Subject()
        s.id = x.id
        s.name = x.name
        s.neptun = x.neptun
        s.credit = x.credit
        s.exam = x.exam
        s.image = x.image
        this.subjects.push(s)
      })
    })
  }

  public addConnection() : void {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    this.http
      .post(
        'backend-url',
        { 
          studentId: this.selectedStudentIdToAdd, 
          subjectId: this.selectedSubjectIdToAdd
        },
        { headers: headers }
      )
      .subscribe(
        (success) => {
          this.snackBar.open("Adding was successful!", "Close", { duration: 5000 })
        },
        (error) => {
          this.snackBar.open("Error occured, please try again.", "Close", { duration: 5000 })
        }
      )
  }


  public removeConnection() : void {
    this.http
      .delete(
        'backend-url',
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }),
          body: {
            studentId: this.selectedStudentIdToRemove, 
            subjectId: this.selectedSubjectIdToRemove
          }
        }
      )
      .subscribe(
        (success) => {
          this.snackBar.open("Removing was successful!", "Close", { duration: 5000 })
        },
        (error) => {
          this.snackBar.open("Error occured, please try again.", "Close", { duration: 5000 })
        }
      )
  }
}
