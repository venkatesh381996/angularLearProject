import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from '../customer/customer.component';

import { CustomerDataComponent } from '../customer-data.component';
import { RouterModule } from '@angular/router';
import { CustomersRoutingModuleModule } from './customers-routing-module.module';
import { CustomerDirDirective } from '../customer-dir.directive';
import { ExponentialPipe } from '../exponential.pipe';
import { CommonAppModule } from '../common-app/common-app.module';

@NgModule({
  declarations: [CustomerComponent, CustomerDataComponent, CustomerDirDirective],
  imports: [
    CommonModule,
    RouterModule,
    CustomersRoutingModuleModule,
    CommonAppModule
  ]
})
export class CustomersModule { }
