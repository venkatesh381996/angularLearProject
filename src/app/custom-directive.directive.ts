import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  elemColor: string;

  constructor(private element: ElementRef, private  renderer: Renderer) {
     //this.element.nativeElement.style.color = 'pink';
    this.elemColor = this.element.nativeElement.style.color;
   }

   @HostListener('mouseover') onMouseOver(){
     //window.alert("hover");
     this.element.nativeElement.style.color = 'orange';
     //this.renderer.setElementStyle(this.element, 'color', 'green');
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.color = this.elemColor;
   }
}
