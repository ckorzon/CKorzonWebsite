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

  travelersMessage = `I worked a summer internship at the eBusiness department of Travelers Insurance, 
  through Kelly Services who Travelers subcontracts to hire interns, 
  from June until August of 2018. At Travelers I had a chance to vastly expand my knowledge 
  of programming and computer science, particularly in the field of web development.
  At Travelers eBusiness, I learned to use Angular, HTML, CSS, and Git.
  Additionally I learned the methodology of agile development and test driven development. My work primarily
  involved helping my team to develop the Billing application within the MyTravelers for
  Business Insurance application, and the Weather Alerts application for Travelers Personal Insurance
  customers. I helped to create new pages, worked on UI refactoring of existing pages, and helped to 
  integrate services necessary for the app.`;

  putnamMessage = `I worked at the Putnam Refectory / Dining Hall during my freshman year at UConn. 
  My responsibilities included cleaning, stacking, and resupplying dishware and silverware, 
  restocking food, sanitizing the serving line, and working and coordinating with kitchen staff.`;

  kiwiMessage = `I was hired at Rocky Hill Kiwi Spoon in November, 2016. I worked there part time from 
  then until August 2017, and have continued to return to work during breaks from school. My 
  responsibilities at Kiwi Spoon include working the register, providing quality customer service, 
  ensuring proper supply of all resources necessary for service, including yogurt, toppings, cups and 
  spoons, etc. I also opened and closed the store on my own when I worked.`; 
  
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
