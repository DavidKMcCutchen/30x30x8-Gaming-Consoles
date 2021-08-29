import { Component } from '@angular/core';


@Component({
  selector: 'consoles-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'List of Popular Gaming Consoles';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'consoles', icon: 'view_list', title: 'Consoles'}
  ]
}
