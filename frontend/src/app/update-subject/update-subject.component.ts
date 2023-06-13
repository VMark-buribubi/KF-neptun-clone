import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from '../_models/subject';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.scss']
})
export class UpdateSubjectComponent implements OnInit{
  http: HttpClient
  route: ActivatedRoute
  subject: Subject
  snackBar: MatSnackBar
  deleteDisabled: boolean
  neptunFormControl : FormControl

  constructor(http: HttpClient, route: ActivatedRoute, snackBar: MatSnackBar) {
    this.http = http
    this.route = route
    this.subject = new Subject()
    this.snackBar = snackBar
    this.deleteDisabled = true
    this.neptunFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6)
    ]);
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      let subjectID = param['id']
      this.http
      .get<any>('http://localhost:7115/Subject')
      .subscribe(resp => {
        resp.filter((x:any) => x.id === subjectID)
        .map((x:any) => {
          this.subject.id = x.id
          this.subject.name = x.name
          this.subject.neptun = x.neptun
          this.subject.credit = x.credit
          this.subject.exam = x.exam
          this.subject.image = x.image
        })
        console.log(this.subject)
      })
    })
  }


  public updateSubject() : void {
    if (this.neptunFormControl.invalid) {
      this.snackBar.open("Invalid Neptun code. Please enter exactly 6 characters.", "Close", { duration: 5000 });
      return;
    }
    this.subject.neptun = this.neptunFormControl.value;

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    this.http
      .put(
        'http://localhost:7115/Subject',
        this.subject,
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


  public deleteSubject(subjectID: string) : void {
    if(subjectID === '' || subjectID === null)
      return

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    this.http
      .delete(
        'http://localhost:7115/Subject/' + subjectID,
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
