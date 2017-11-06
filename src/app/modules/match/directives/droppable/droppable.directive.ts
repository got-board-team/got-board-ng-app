import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[boardDroppable]'
})
export class DroppableDirective {

  @Input() unit: any;
  el: ElementRef;

  @Output() dropTerritoryEvent:EventEmitter<any> = new EventEmitter<any>();

  constructor(el: ElementRef) {
    this.el = el;
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) {
    this.setOriginTerritory(event);
    event.preventDefault(); // https://stackoverflow.com/questions/9506041/javascript-events-mouseup-not-firing-after-mousemove
  }

  @HostListener('mouseup', ['$event'])
  onMouseup(event: MouseEvent) {
    let territory = this.getDroppedTerritory(event);
    if (this.unit.id === 'new-board-unit') this.unit.id = 0;
    this.dropTerritoryEvent.emit({unit: this.unit, territoryId: territory.id});
  }

  setOriginTerritory(event: MouseEvent) {
    let territory = this.getDroppedTerritory(event);
    this.unit.originTerritory = territory.id;
  }

  getDroppedTerritory(event: MouseEvent) {
    this.el.nativeElement.style.display = 'none';
    let territory = document.elementFromPoint(event.clientX, event.clientY);
    this.el.nativeElement.style.display = '';
    return territory;
  }

}
