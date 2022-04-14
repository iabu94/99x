import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'adra-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() menuClicked = new EventEmitter();
}