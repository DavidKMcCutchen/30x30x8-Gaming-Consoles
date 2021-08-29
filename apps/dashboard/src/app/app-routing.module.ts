import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { LoginComponent, WildComponent } from "@consoles/ui-login";
import { ConsoleComponent } from './console/console.component';
import { ConsolesComponent } from './consoles/consoles.component';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'consoles', component: ConsolesComponent},
  {path: 'consoles/:id', component: ConsoleComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
