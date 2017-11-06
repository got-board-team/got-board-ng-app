import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[boardDraggable]'
})
export class DraggableDirective {

  @Input() unit: any;
  el: ElementRef;
  enableMove: boolean;

  @Output() onDragStart:EventEmitter<any> = new EventEmitter<any>();

  constructor(el: ElementRef) {
    this.el = el;
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if (this.enableMove) {
      // Updating unit object based latest position
      if (this.el.nativeElement.dataset.unitX && this.el.nativeElement.dataset.unitY) {
        this.unit.x = parseInt(this.el.nativeElement.dataset.unitX);
        this.unit.y = parseInt(this.el.nativeElement.dataset.unitY);

        // Clear data attributes. Not needed anymore.
        this.el.nativeElement.dataset.unitX = '';
        this.el.nativeElement.dataset.unitY = '';
      }

      this.unit.y += event.movementY;
      this.unit.x += event.movementX;

      if (this.el.nativeElement.parentElement.id === 'warroom') {
        // this.el.nativeElement is the unit in the warroom
        // this.unit is the unit of warRoomUnits
        let movingUnit = document.getElementById('new-board-unit');
        movingUnit.style.left = this.unit.x + 'px';
        movingUnit.style.top = this.unit.y + 'px';

        // Saving current position in a temp data attribute
        movingUnit.dataset.unitX = this.unit.x;
        movingUnit.dataset.unitY = this.unit.y;
      }
    }
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) {
    this.enableMove = true;

    if (this.el.nativeElement.parentElement.id === 'warroom') {
      this.unit.x = (event.target.offsetLeft + event.target.offsetParent.offsetLeft);
      this.unit.y = (event.target.offsetTop + event.target.offsetParent.offsetTop);
    }

    this.onDragStart.emit(this.unit);
    event.preventDefault(); // https://stackoverflow.com/questions/9506041/javascript-events-mouseup-not-firing-after-mousemove
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseup(event: MouseEvent, unit: any) {
    this.enableMove = false;
  }

}
