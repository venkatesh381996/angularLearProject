import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
 router: Router;
  constructor(router: Router) { 
  this.router = router;
  }
  ngOnInit() {
  }

  onClick(){
    debugger;
   console.log( this.router.url);
  this.router.navigateByUrl(this.router.url+'/customerdata');
  }

}
