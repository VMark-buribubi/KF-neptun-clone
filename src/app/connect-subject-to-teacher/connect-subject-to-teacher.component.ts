import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from '../_models/subject';
import { Teacher } from '../_models/teacher';

@Component({
  selector: 'app-connect-subject-to-teacher',
  templateUrl: './connect-subject-to-teacher.component.html',
  styleUrls: ['./connect-subject-to-teacher.component.scss']
})
export class ConnectSubjectToTeacherComponent implements OnInit{
  http: HttpClient
  snackBar: MatSnackBar
  subjects: Array<Subject>
  teachers: Array<Teacher>
  selectedTeacherIdToRemove: string
  selectedSubjectIdToRemove: string
  selectedTeacherIdToAdd: string
  selectedSubjectIdToAdd: string

  constructor(http: HttpClient, snackBar:MatSnackBar) {
    this.http = http
    this.snackBar = snackBar
    this.teachers = []
    this.subjects = []
    this.selectedTeacherIdToRemove = ''
    this.selectedSubjectIdToRemove = ''
    this.selectedTeacherIdToAdd = ''
    this.selectedSubjectIdToAdd = ''
  }

  ngOnInit(): void {
    this.http
    .get<Array<Teacher>>('backend-url')
    .subscribe(resp => {
      resp.map(x => {
        let t = new Teacher()
        t.id = x.id
        t.name = x.name
        t.neptun = x.neptun
        t.image = x.image
        t.creatorName = x.creatorName
        this.teachers.push(t)
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
        s.creatorName = x.creatorName
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
          subjectId: this.selectedSubjectIdToAdd,
          teacherId: this.selectedTeacherIdToAdd
          
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
            subjectId: this.selectedSubjectIdToRemove,
            teacherId: this.selectedTeacherIdToRemove 
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
