import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersModule } from './customers/customers.module';
import { HeroComponent } from './AppModule/hero/hero.component';

const routes: Routes = [{path: 'customer', loadChildren: () => CustomersModule },
{path: 'herolist', component: HeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
