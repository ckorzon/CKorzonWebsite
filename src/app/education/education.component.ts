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

  hsMessage = `I attended Coginchaug Regional High School in Durham Connecticut. At Coginchaug I played on the varsity boy's tennis team for two years, and involved myself in 
  the quizbowl trivia club. This is also where I took my first course in computer programming, during my junior year, which I then helped to teach during my senior year.
  I graduated with a 3.87 GPA and with 14 college-level course credits.`;

  uconnMessage = `I am currently a Sophomore undergraduate Computer Science Major at the University of Connecticut. During my freshman year I lived and took part in the 
  Engineering Learning Community, and spent some time in the Cyber Security Club. Thus far I have taken 33 credits and have a 3.826 GPA.`;
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
