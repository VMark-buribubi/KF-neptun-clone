import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subject } from '../_models/subject';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.scss']
})
export class CreateSubjectComponent {
  http: HttpClient
  subject: Subject
  snackBar: MatSnackBar
  neptunFormControl : FormControl

  constructor(http: HttpClient, snackBar:MatSnackBar) {
    this.http = http
    this.subject = new Subject()
    this.snackBar = snackBar
    this.neptunFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6)
    ]);
  }

  public createSubject() : void {
    
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
        'http://localhost:7115/Subject',
        this.subject,
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
