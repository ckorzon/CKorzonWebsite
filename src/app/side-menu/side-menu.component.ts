import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { routes } from '../app-routing.module';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  //selectedPage: any;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {


  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  


  navTo(page): void {
    this._router.navigate(['/',page])
  }

}
