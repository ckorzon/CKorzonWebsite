import { Component } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { routes } from './app-routing.module';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  appPages = [ {name:"Education"}, {name:"Work Experience"}, {name: "About Me"}]
  title = 'app';
}
