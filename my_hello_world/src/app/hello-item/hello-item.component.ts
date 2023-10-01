import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hello-item',
  templateUrl: './hello-item.component.html',
  styleUrls: ['./hello-item.component.css']
})
export class HelloItemComponent {
  @Input() pseudo: string = '';
  @Output() onRemovePressed: EventEmitter<any> = new EventEmitter(); 
}
