import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GConsole, emptyConsole } from "@consoles/api-interfaces";
import { ConsoleFacade } from '@consoles/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'consoles-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.scss']
})
export class ConsolesComponent implements OnInit {
  allConsoles$: Observable<GConsole[]> = this.consoleFacade.allConsoles$;
  selectedConsole$: Observable<GConsole> = this.consoleFacade.selectedConsoles$;

  form: FormGroup;

  constructor(
    private consoleFacade: ConsoleFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.consoleFacade.mutations$.subscribe((_) => this.resetConsole());
  }

  ngOnInit() {
    this.initForm();
    this.consoleFacade.loadConsoles();
    this.resetConsole()

    const consoleRouteId = this.route.snapshot.params['id'];

    if (consoleRouteId) {
      this.loadConsole((consoleRouteId))
    }
  }

  viewConsole(consoleId: string) {
    this.router.navigate(["consoles", consoleId])
  }

  loadConsole(consoleId: string) {
    this.consoleFacade.selectConsole(consoleId);
    this.consoleFacade.loadConsole(consoleId);
  }

  selectConsole(console: GConsole) {
    this.consoleFacade.selectConsole(console.id)
    this.form.patchValue(console);
  }

  saveConsole(console: GConsole) {
    this.consoleFacade.saveConsole(console);
  }

  deleteConsole(console: GConsole) {
    this.consoleFacade.deleteConsole(console);
  }

  resetConsole() {
    this.form.reset();
    this.selectConsole(emptyConsole)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      brand: [''],
      generation: [''],
    })
  }
}
