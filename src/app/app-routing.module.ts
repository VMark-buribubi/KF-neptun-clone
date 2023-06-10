import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { ListTeachersComponent } from './list-teachers/list-teachers.component';
import { ListSubjectsComponent } from './list-subjects/list-subjects.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import { ApiService } from './api.service';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { ConnectStudentToSubjectComponent } from './connect-student-to-subject/connect-student-to-subject.component';
import { ConnectSubjectToTeacherComponent } from './connect-subject-to-teacher/connect-subject-to-teacher.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'list-students', component: ListStudentsComponent },
  { path: 'list-teachers', component: ListTeachersComponent },
  { path: 'list-subjects', component: ListSubjectsComponent },

  { path: 'create-student', component: CreateStudentComponent, canActivate: [ApiService]},
  { path: 'create-subject', component: CreateSubjectComponent, canActivate: [ApiService]},
  { path: 'create-teacher', component: CreateTeacherComponent, canActivate: [ApiService]},

  { path: 'connect-student-to-subject', component: ConnectStudentToSubjectComponent, canActivate: [ApiService]},
  { path: 'connect-subject-to-teacher', component: ConnectSubjectToTeacherComponent, canActivate: [ApiService]},

  { path: 'update-student/:id', component: UpdateStudentComponent, canActivate: [ApiService]},
  { path: 'update-teacher/:id', component: UpdateTeacherComponent, canActivate: [ApiService]},
  { path: 'update-subject/:id', component: UpdateSubjectComponent, canActivate: [ApiService]},

  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
