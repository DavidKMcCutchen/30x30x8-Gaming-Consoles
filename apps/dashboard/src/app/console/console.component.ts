import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsoleFacade } from '@consoles/core-state';


@Component({
  selector: 'consoles-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  currentConsole$ = this.consoleFacade.selectedConsoles$


  constructor(
    private consoleFacade: ConsoleFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const consoleId = this.route.snapshot.params.id;
    this.loadConsole(consoleId);
  }

  loadConsole(consoleId: string) {
    this.consoleFacade.selectConsole(consoleId);
    this.consoleFacade.loadConsole(consoleId);
  }

  navigateBack() {
    this.router.navigate(['/consoles']);
  };

}
