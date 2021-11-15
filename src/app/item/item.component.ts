import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  editable = false;

  @Input() item: any;
  @Input() newItem: any;
  @Output() remove = new EventEmitter<any>();

  saveItem (description: any) {
    if (!description) {
      return;
    }
    this.editable = false;
    this.item.description = description;
  }
  

}
