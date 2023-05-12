import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { StudentComponent } from './components/student/student.component';
import { CourseInstructorComponent } from './components/course-instructor/course-instructor.component';
import { CourseStudentComponent } from './components/course-student/course-student.component';

const routes: Routes = [
  {path:'student', component:StudentComponent},
  {path:'course', component:CourseComponent},
  {path:'instructor', component:InstructorComponent},
  {path:'courses-instructor/:id', component:CourseInstructorComponent},
  {path:'courses-student/:id', component:CourseStudentComponent},

  {path:'**',redirectTo:'/course',pathMatch:'full'},
  {path:'',redirectTo:'/course',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
