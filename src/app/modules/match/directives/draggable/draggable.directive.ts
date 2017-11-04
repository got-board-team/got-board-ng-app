import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[boardDraggable]'
})
export class DraggableDirective {

  @Input() unit: any;
  el: ElementRef;
  enableMove: boolean;

  constructor(el: ElementRef) {
    this.el = el;
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if (this.enableMove) {
      let top = event.movementY + parseInt(this.el.nativeElement.getAttribute('y'));
      let left = event.movementX + parseInt(this.el.nativeElement.getAttribute('x'));
      console.log({x: left, y: top});
      this.el.nativeElement.setAttribute('y', top);
      this.el.nativeElement.setAttribute('x', left);
    }
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) {
    this.enableMove = true;
    event.preventDefault(); // https://stackoverflow.com/questions/9506041/javascript-events-mouseup-not-firing-after-mousemove
  }

  @HostListener('mouseup', ['$event'])
  onMouseup(event: MouseEvent, unit: any) {
    this.enableMove = false;
  }

}
