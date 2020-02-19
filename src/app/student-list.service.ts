import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StudentDetails } from './student-details';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {
studentData: StudentDetails[];
  constructor(private http: HttpClient) { }

  getstudents(): Observable<StudentDetails[]> {
    return this.http.get<StudentDetails[]>('/assets/data/student.json').pipe(tap(response => {
      debugger;
      response[0].name = 'krishna';
      this.studentData = response;
      console.log ( this.studentData);
    }));
  }
}
