import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Student } from '../_models/student';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {
  http: HttpClient
  student: Student
  snackBar: MatSnackBar
  neptunFormControl : FormControl

  constructor(http: HttpClient, snackBar:MatSnackBar) {
    this.http = http
    this.student = new Student()
    this.snackBar = snackBar
    this.neptunFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6)
    ]);
  }


  public createStudent() : void {
    console.log(this.student)

  if (this.neptunFormControl.invalid) {
      this.snackBar.open("Invalid Neptun code. Please enter exactly 6 characters.", "Close", { duration: 5000 });
      return;
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    this.http
      .post(
        'http://localhost:7115/Student',
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
