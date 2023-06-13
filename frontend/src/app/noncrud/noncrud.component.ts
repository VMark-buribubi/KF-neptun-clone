import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../_models/student';
import { Subject } from '../_models/subject';


@Component({
  selector: 'app-noncrud',
  templateUrl: './noncrud.component.html',
  styleUrls: ['./noncrud.component.scss']
})
export class NoncrudComponent implements OnInit {

  neptun!: string;
  credit!: number;
  studentsWithNeptunCode!: Student[];
  studentsWithMoreThanOneSubject!: Student[];
  examSubjectsWithCredit!: Subject[];

  constructor(private http: HttpClient) {
    this.credit = 3
    this.neptun = "ABC123"
   }

  ngOnInit(): void {
    this.getStudentsWithNeptunCode();
    this.getStudentsWithMoreThanOneSubject();
    this.getExamSubjectsWithCredit();
  }

  getStudentsWithNeptunCode(): void {
    this.http.get<Student[]>(`http://localhost:7115/noncrud/neptuncode/${this.neptun}`)
      .subscribe((students: Student[]) => {
        this.studentsWithNeptunCode = students;
      });
  }

  getStudentsWithMoreThanOneSubject(): void {
    this.http.get<Student[]>('http://localhost:7115/noncrud/studentmoresubjects')
      .subscribe((students: Student[]) => {
        this.studentsWithMoreThanOneSubject = students;
      });
  }

  getExamSubjectsWithCredit(): void {
    this.http.get<Subject[]>(`http://localhost:7115/noncrud/examsubjects/${this.credit}`)
      .subscribe((subjects: Subject[]) => {
        this.examSubjectsWithCredit = subjects;
      });
  }

}
