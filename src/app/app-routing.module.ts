import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersModule } from './customers/customers.module';
import { HeroComponent } from './AppModule/hero/hero.component';
import { CanActiveGaurdGuard } from './can-active-gaurd.guard';
import { CanActivateCheckGuard } from './can-activate-check.guard';
import { StudentComponent } from './AppModule/student/student.component';
import { ChildActiveGuard } from './child-active.guard';

const routes: Routes = [{path: 'customer', loadChildren: () => CustomersModule },
{path: 'herolist', component: HeroComponent, canActivate: [CanActiveGaurdGuard, CanActivateCheckGuard],
canActivateChild:[ChildActiveGuard],
children: [{path: ':id', component: StudentComponent}]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
