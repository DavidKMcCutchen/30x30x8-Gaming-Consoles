import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { GConsole } from '@consoles/api-interfaces';

@Component({
  selector: 'consoles-console-details',
  templateUrl: './console-details.component.html',
  styleUrls: ['./console-details.component.scss']
})
export class ConsoleDetailsComponent {
  currentConsole: GConsole;
  originalTitle: string;


  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set console(value) {
    if (value) this.originalTitle = value.name;
    this.currentConsole = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }
}
