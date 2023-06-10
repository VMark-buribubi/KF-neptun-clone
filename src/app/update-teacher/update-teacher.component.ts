import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from '../_models/teacher';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(http: HttpClient, route: ActivatedRoute, snackBar: MatSnackBar) {
    this.http = http
    this.route = route
    this.teacher = new Teacher()
    this.snackBar = snackBar
    this.deleteDisabled = true
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      let teacherID = param['id']
      this.http
      .get<any>('backend-url')
      .subscribe(resp => {
        resp.filter((x:any) => x.id === teacherID)
        .map((x:any) => {
          this.teacher.id = x.id
          this.teacher.name = x.name
          this.teacher.neptun = x.neptun
          this.teacher.image = x.image
          this.teacher.creatorName = x.creatorName
        })
        
        console.log(this.teacher)
      })
    })
  }

  public updateTeacher() : void {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    this.http
      .put(
        'backend-url',
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
        'backend-url' + teacherID,
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
