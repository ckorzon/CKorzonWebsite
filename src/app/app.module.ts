import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './Conrads-app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AboutMeComponent } from './about_me/about_me.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule, routes } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    WorkExperienceComponent,
    EducationComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ClarityModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    AppRoutingModule,
    // appRoutes
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
