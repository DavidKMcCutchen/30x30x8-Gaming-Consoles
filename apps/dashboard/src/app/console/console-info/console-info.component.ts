import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ConsoleFacade } from "@consoles/core-state";
import { GConsole } from "@consoles/api-interfaces";

@Component({
  selector: 'consoles-console-info',
  templateUrl: './console-info.component.html',
  styleUrls: ['./console-info.component.scss']
})
export class ConsoleInfoComponent {

  @Input() console: GConsole | null;


  constructor(
    private consoleFacade: ConsoleFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  navigateBack() {
    this.router.navigate(['/consoles']);
  };

}
