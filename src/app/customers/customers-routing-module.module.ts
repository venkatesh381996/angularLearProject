import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { CustomerDataComponent } from '../customer-data.component';


const routes: Routes = [
   {path: '', component: CustomerComponent, pathMatch: 'full'},
 // {path: '', component: CustomerComponent, children: [{path: 'customer/customerdata', component: CustomerDataComponent},
//]},
{path: 'customerdata', component: CustomerDataComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomersRoutingModuleModule { }
