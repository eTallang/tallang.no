import { Component, Input, OnChanges } from '@angular/core';

import { MenuItemDirective } from '../menu-item.directive';

@Component({
  selector: 'tallang-active-indicator',
  templateUrl: './active-indicator.component.html',
  styleUrls: ['./active-indicator.component.scss']
})
export class ActiveIndicatorComponent implements OnChanges {
  @Input() hoveredItem: MenuItemDirective;
  @Input() selectedItem: MenuItemDirective;
  @Input() rtl: boolean;
  selectedItemHeight: number;
  selectedItemOffset: number;

  ngOnChanges() {
    if (this.hoveredItem) {
      this.selectedItemHeight = this.hoveredItem.height;
      this.selectedItemOffset = this.hoveredItem.offset;
    } else if (this.selectedItem) {
      this.selectedItemHeight = this.selectedItem.height;
      this.selectedItemOffset = this.selectedItem.offset;
    }
  }
}
