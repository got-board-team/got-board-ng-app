import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[boardDraggable]'
})
export class DraggableDirective {

  constructor(el: ElementRef) { }

  onMousemove(event: MouseEvent) {
    console.log(event.type);
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) {
    console.log(event.type);
    document.addEventListener('mousemove', this.onMousemove, true);
    event.preventDefault(); // https://stackoverflow.com/questions/9506041/javascript-events-mouseup-not-firing-after-mousemove
  }

  @HostListener('mouseup', ['$event'])
  onMouseup(event: MouseEvent, unit: any) {
    console.log(event.type);
    document.removeEventListener('mousemove', this.onMousemove, true);
  }

}
