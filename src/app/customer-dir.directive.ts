import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomerDir]'
})
export class CustomerDirDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = 'red';
   }

}
