import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../_models/student';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit{
  http: HttpClient
  route: ActivatedRoute
  student: Student
  snackBar: MatSnackBar
  deleteDisabled: boolean

  constructor(http: HttpClient, route: ActivatedRoute, snackBar: MatSnackBar) {
    this.http = http
    this.route = route
    this.student = new Student()
    this.snackBar = snackBar
    this.deleteDisabled = true
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      let studentID = param['id']
      this.http
      .get<any>('http://localhost:7115/Student')
      .subscribe(resp => {
        resp.filter((x:any) => x.id === studentID)
        .map((x:any) => {
          this.student.id = x.id
          this.student.name = x.name
          this.student.neptun = x.neptun
          this.student.sumcredit = x.sumcredit
          this.student.image = x.image
        })
        
        console.log(this.student)
      })
    })
  }

  public updateStudent() : void {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    this.http
      .put(
        'http://localhost:7115/Student',
        this.student,
        { headers: headers }
      )
      .subscribe(
        (success) => {
          this.snackBar.open("Update was successful!", "Close", { duration: 5000 })
        },
        (error) => {
          this.snackBar.open("Error occured, please try again.", "Close", { duration: 5000 })
        }
      )
  }

  public deleteStudent(studentID: string) : void {
    if(studentID === '' || studentID === null)
      return

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    this.http
      .delete(
        'http://localhost:7115/Student/' + studentID,
        { headers: headers }
      )
      .subscribe(
        (success) => {
          this.snackBar.open("Delete was successful!", "Close", { duration: 5000 })
        },
        (error) => {
          this.snackBar.open("Error occured, please try again.", "Close", { duration: 5000 })
        }
      )
  }

}
