import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { StudentDetails } from './student-details';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {
studentData: StudentDetails[];
  constructor(private http: HttpClient) { }

  getstudents(): Observable<StudentDetails[]> {
    return this.http.get<StudentDetails[]>('/assets/data/student.json').pipe(tap(response => {
      debugger;
      response[0].name = 'dinesh';
      this.studentData = response;
      console.log ( this.studentData);
    }));
  }
}
