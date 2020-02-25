import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersModule } from './customers/customers.module';
import { HeroComponent } from './AppModule/hero/hero.component';
import { CanActiveGaurdGuard } from './can-active-gaurd.guard';

const routes: Routes = [{path: 'customer', loadChildren: () => CustomersModule },
{path: 'herolist', component: HeroComponent, canActivate: [CanActiveGaurdGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
