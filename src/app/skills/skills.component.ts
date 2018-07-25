import { Component, OnInit, NgModule, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @ViewChild('generalBody') generalBody: ElementRef;
  @ViewChild('technicalBody') technicalBody: ElementRef;

  generalExpanded: boolean;
  technicalExpanded: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleGeneralBody() {
    if (this.generalBody.nativeElement) {
      this.generalExpanded = !this.generalExpanded
    }
  };
  toggleTechnicalBody() {
    if (this.technicalBody.nativeElement) {
      this.technicalExpanded = !this.technicalExpanded;
    }
  };

}
