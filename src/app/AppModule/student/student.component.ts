import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
 id: number;
 name: string;
  constructor(private activeRouter: ActivatedRoute) {
    debugger;
    this.id = this.activeRouter.snapshot.params.id;
    this.name=this.activeRouter.snapshot.params.name;
    console.log("id:"+this.id);
   }
 
  ngOnInit(){
    
    
  }

}
