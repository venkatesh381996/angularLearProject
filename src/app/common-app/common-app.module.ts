import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectiveDirective } from '../custom-directive.directive';
import { ExponentialPipe } from '../exponential.pipe';

@NgModule({
  declarations: [CustomDirectiveDirective, ExponentialPipe],
  imports: [
    CommonModule
  ],
  exports: [CustomDirectiveDirective, ExponentialPipe]
})
export class CommonAppModule { }
