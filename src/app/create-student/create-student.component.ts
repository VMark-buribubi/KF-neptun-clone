import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Student } from '../_models/student';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {
  http: HttpClient
  student: Student
  snackBar: MatSnackBar

  constructor(http: HttpClient, snackBar:MatSnackBar) {
    this.http = http
    this.student = new Student()
    this.snackBar = snackBar
  }

  public createStudent() : void {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    this.http
      .post(
        'backend-url',
        this.student,
        { headers: headers }
      )
      .subscribe(
        (success) => {
          this.snackBar.open("Create was successful!", "Close", { duration: 5000 })
        },
        (error) => {
          this.snackBar.open("Error occured, please try again.", "Close", { duration: 5000 })
        }
      )
  }
}
