import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[boardDraggable]'
})
export class DraggableDirective {

  @Input() unit: any;
  el: ElementRef;
  enableMove: boolean;

  @Output() onMousedownEvent:EventEmitter<any> = new EventEmitter<any>();

  constructor(el: ElementRef) {
    this.el = el;
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if (this.enableMove) {
      let movingUnit;

      if (this.el.nativeElement.tagName === 'DIV') {
        movingUnit = document.getElementById('new-board-unit');
      } else {
        movingUnit = this.el.nativeElement;
      }

      let top = event.movementY + parseInt(movingUnit.getAttribute('y'));
      let left = event.movementX + parseInt(movingUnit.getAttribute('x'));

      movingUnit.setAttribute('y', top);
      movingUnit.setAttribute('x', left);

      console.log('moving: ', movingUnit);
    }
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) {
    this.enableMove = true;
    this.unit.x = (event.target.offsetLeft + event.target.offsetParent.offsetLeft);
    this.unit.y = (event.target.offsetTop + event.target.offsetParent.offsetTop);
    this.onMousedownEvent.emit(this.unit);
    event.preventDefault(); // https://stackoverflow.com/questions/9506041/javascript-events-mouseup-not-firing-after-mousemove
  }

  @HostListener('mouseup', ['$event'])
  onMouseup(event: MouseEvent, unit: any) {
    this.enableMove = false;
  }

}
