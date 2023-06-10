import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { ListTeachersComponent } from './list-teachers/list-teachers.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'list-students', component: ListStudentsComponent },
  { path: 'list-teachers', component: ListTeachersComponent },
  { path: 'list-subjects', component: ListTeachersComponent },

  { path: 'create-student', component: ListTeachersComponent canActivate: [ApiService]},
  { path: 'create-subject', component: ListTeachersComponent canActivate: [ApiService]},
  { path: 'create-teacher', component: ListTeachersComponent canActivate: [ApiService]},

  { path: 'update-student', component: UpdateStudentComponent canActivate: [ApiService]},
  { path: 'update-teacher', component: UpdateTeacherComponent canActivate: [ApiService]},
  { path: 'update-subject', component: UpdateSubjectComponent canActivate: [ApiService]},

  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
