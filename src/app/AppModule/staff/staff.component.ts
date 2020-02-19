import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor() { }
@Input() personName: string;
  peru: string;

 // name = new FormControl('');
 staffForm = new FormGroup({
  name: new FormControl('')
 });

  ngOnInit() {
   
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges() {
    this.peru = this.personName;
    console.log(this.personName);
  }
  onSubmit(){
    debugger;
   // console.log('name:'+ this.name.value);
    console.log("name:"+ this.staffForm.value.name);
  }
}
