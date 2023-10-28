import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  currentColor: string = '';
  constructor (private eleRef: ElementRef){ }

  @HostListener('mouseover')
  onMouseOver(){
    this.currentColor = this.eleRef.nativeElement.style.color
    this.eleRef.nativeElement.style.color ='green';

  }

  @HostListener('mouseleave') 
  onMouseLeave(){

  // this.eleRef.nativeElement.style.color='black' ;
  this.eleRef.nativeElement.style.color = this.currentColor;

  }

}
