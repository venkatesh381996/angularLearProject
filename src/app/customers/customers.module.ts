import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from '../customer/customer.component';

import { CustomerDataComponent } from '../customer-data.component';
import { RouterModule } from '@angular/router';
import { CustomersRoutingModuleModule } from './customers-routing-module.module';

@NgModule({
  declarations: [CustomerComponent, CustomerDataComponent],
  imports: [
    CommonModule,
    RouterModule,
    CustomersRoutingModuleModule
  ]
})
export class CustomersModule { }
