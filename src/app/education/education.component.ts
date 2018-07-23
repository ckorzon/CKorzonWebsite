import { Component, OnInit, NgModule, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @ViewChild('hsBody') hsBody: ElementRef;
  @ViewChild('collegeBody') collegeBody: ElementRef;
  // expanded: boolean;
  hsExpanded: boolean;
  collegeExpanded: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleHsBody() {
    if (this.hsBody.nativeElement) {
      this.hsExpanded = !this.hsExpanded
    }
  };
  toggleCollegeBody() {
    if (this.collegeBody.nativeElement) {
      this.collegeExpanded = !this.collegeExpanded;
    }
  };

}
