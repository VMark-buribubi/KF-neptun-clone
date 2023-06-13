import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Teacher } from '../_models/teacher';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.scss']
})
export class CreateTeacherComponent {
  http: HttpClient
  teacher: Teacher
  snackBar: MatSnackBar
  neptunFormControl : FormControl

  constructor(http: HttpClient, snackBar:MatSnackBar) {
    this.http = http
    this.teacher = new Teacher()
    this.snackBar = snackBar
    this.neptunFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6)
    ]);
  }

  public createTeacher() : void {
    
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
        'http://localhost:7115/Teacher',
        this.teacher,
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
