import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GConsole } from "@consoles/api-interfaces";

@Component({
  selector: 'consoles-console-list',
  templateUrl: './console-list.component.html',
  styleUrls: ['./console-list.component.scss']
})
export class ConsoleListComponent {
  @Input() consoles: GConsole[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() consoleViewed = new EventEmitter();
};
