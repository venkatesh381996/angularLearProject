import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  name: string;
 id: number;
  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit() {
   this.id = this.activeRouter.snapshot.params[' id '];
  }

}
