import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from '../_models/teacher';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.scss']
})
export class UpdateTeacherComponent implements OnInit{
  http: HttpClient
  route: ActivatedRoute
  teacher: Teacher
  snackBar: MatSnackBar
  deleteDisabled: boolean
  neptunFormControl : FormControl

  constructor(http: HttpClient, route: ActivatedRoute, snackBar: MatSnackBar) {
    this.http = http
    this.route = route
    this.teacher = new Teacher()
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
      let teacherID = param['id']
      this.http
      .get<any>('http://localhost:7115/Teacher')
      .subscribe(resp => {
        resp.filter((x:any) => x.id === teacherID)
        .map((x:any) => {
          this.teacher.id = x.id
          this.teacher.name = x.name
          this.teacher.neptun = x.neptun
          this.teacher.image = x.image
        })
        
        console.log(this.teacher)
      })
    })
  }

  public updateTeacher() : void {
    if (this.neptunFormControl.invalid) {
      this.snackBar.open("Invalid Neptun code. Please enter exactly 6 characters.", "Close", { duration: 5000 });
      return;
    }
    this.teacher.neptun = this.neptunFormControl.value;

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    this.http
      .put(
        'http://localhost:7115/Teacher',
        this.teacher,
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

  public deleteTeacher(teacherID: string) : void {
    if(teacherID === '' || teacherID === null)
      return

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    this.http
      .delete(
        'http://localhost:7115/Teacher/' + teacherID,
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
