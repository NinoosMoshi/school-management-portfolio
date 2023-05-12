import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../model/course';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

        // http://localhost:8080/courses/all-courses?page=0&size=5
        public getCourseList(page:number, size:number):Observable<GetResponse>{
          return this.http.get<GetResponse>(`${environment.backendHost}/courses/all-courses?page=${page}&size=${size}`).pipe(
            map(response => response)
          )
        }


         // http://localhost:8080/courses/search?keyword=co&page=0&size=5
         public searchCourses(keyword:string, page:number, size:number):Observable<GetResponse>{
            return this.http.get<GetResponse>(`${environment.backendHost}/courses/search?keyword=${keyword}&page=${page}&size=${size}`).pipe(
              map(response => response)
            )
          }



         // http://localhost:8080/courses/delete/{courseId}
         public deleteCourse(course:Course):Observable<any>{
            return this.http.delete<void>(`${environment.backendHost}/courses/delete/${course.courseId}`);
          }



          // http://localhost:8080/courses/create
          public createCourse(course: Course):Observable<Course>{
            return this.http.post<Course>(`${environment.backendHost}/courses/create`,course).pipe(
              map(response => response)
            )
          }


          // http://localhost:8080/courses/update/{courseId}
          public updateCourse(course: Course, courseId:number):Observable<Course>{
            return this.http.put<Course>(`${environment.backendHost}/courses/update/${courseId}`,course).pipe(
              map(response => response)
            )
          }


          // http://localhost:8080/instructors/{id}/courses?page=0&size=5
          public getCoursesByInstructor(instructorId:number, page:number, size:number):Observable<GetResponse>{
            return this.http.get<GetResponse>(`${environment.backendHost}/instructors/${instructorId}/courses?page=${page}&size=${size}`).pipe(
              map(response => response)
            )
          }


           // http://localhost:8080/students/{studentId}/courses?page=0&size=5
           public getCoursesByStudent(studentId:number, page:number, size:number):Observable<GetResponse>{
            return this.http.get<GetResponse>(`${environment.backendHost}/students/${studentId}/courses?page=${page}&size=${size}`).pipe(
              map(response => response)
            )
          }



          // http://localhost:8080/students/{studentId}/other-courses?page=0&size=5
          public getNonEnrolledCoursesByStudent(studentId:number, page:number, size:number):Observable<GetResponse>{
            return this.http.get<GetResponse>(`${environment.backendHost}/students/${studentId}/other-courses?page=${page}&size=${size}`).pipe(
              map(response => response)
            )
          }


          // http://localhost:8080/courses/{courseId}/enroll/students/{studentId}
          public getEnrollStudentInCourse(courseId:number,studentId:number):Observable<Course>{
            return this.http.post<Course>(`${environment.backendHost}/courses/${courseId}/enroll/students/${studentId}`,null).pipe(
              map(response => response)
            )
          }



}


interface GetResponse{
  content: Course[],
  totalPages: number,
  totalElements: number,
  size: number,
  number: number
}

