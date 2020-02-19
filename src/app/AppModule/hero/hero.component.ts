import { Component, OnInit } from '@angular/core';
import { StudentListService } from 'src/app/student-list.service';
import { StudentDetails } from 'src/app/student-details';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  id: number;
  studentList: string;
  studentsData: StudentDetails[];

  constructor(private studentListService: StudentListService) { }

  ngOnInit() {
    this.id = 44;
    this.studentListService.getstudents().subscribe(response => {
      if (response) {
        this.studentsData = response;
        console.log(this.studentsData);
      }
    });
  }

}
