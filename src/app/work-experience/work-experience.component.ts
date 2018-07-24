import { Component, OnInit, NgModule, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  @ViewChild('travelersBody') travelersBody: ElementRef;
  @ViewChild('putnamBody') putnamBody: ElementRef;
  @ViewChild('kiwiBody') kiwiBody: ElementRef;
  // expanded: boolean;
  travelersExpanded: boolean;
  putnamExpanded: boolean;
  kiwiExpanded: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleTravelersBody() {
    if (this.travelersBody.nativeElement) {
      this.travelersExpanded = !this.travelersExpanded;
    }
  };
  togglePutnamBody() {
    if (this.putnamBody.nativeElement) {
      this.putnamExpanded = !this.putnamExpanded;
    }
  };
  toggleKiwiBody() {
    if (this.kiwiBody.nativeElement) {
      this.kiwiExpanded = !this.kiwiExpanded;
    }
  };
}
