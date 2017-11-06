import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[boardDroppable]'
})
export class DroppableDirective {

  @Input() unit: any;
  el: ElementRef;

  @Output() onDrop:EventEmitter<any> = new EventEmitter<any>();

  constructor(el: ElementRef) {
    this.el = el;
  }

  @HostListener('mouseup', ['$event'])
  onMouseup(event: MouseEvent) {
    let territory = this.getDroppedTerritory(event);
    this.onDrop.emit({unit: this.unit, territoryId: territory.id});
  }

  getDroppedTerritory(event: MouseEvent) {
    this.el.nativeElement.style.display = 'none';
    let territory = document.elementFromPoint(event.clientX, event.clientY);
    this.el.nativeElement.style.display = '';
    return territory;
  }

}
