import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CourseComponent } from './components/course/course.component';
import { StudentComponent } from './components/student/student.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { CourseInstructorComponent } from './components/course-instructor/course-instructor.component';
import { CourseStudentComponent } from './components/course-student/course-student.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseComponent,
    StudentComponent,
    InstructorComponent,
    CourseInstructorComponent,
    CourseStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
