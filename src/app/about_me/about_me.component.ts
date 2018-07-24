import { Component, OnInit, NgModule, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component ({
    selector: 'about-me',
    templateUrl: './about_me.html',
    styleUrls: ['./about_me.css']
})
export class AboutMeComponent implements OnInit {
    @ViewChild('backgroundBody') backgroundBody: ElementRef;
    @ViewChild('interestBody') interestBody: ElementRef;
    // expanded: boolean;
    interestExpanded: boolean;
    backgroundExpanded: boolean;

    backgroundMessage= "My name is Conrad Brian Korzon, I am currently a Computer Science major undergraduate at the University of Connecticut. I grew up in the small town of Middlefield, Connecticut."

    interestMessage: string; 

    constructor() { }

    ngOnInit() {

    }

    toggleBackgroundBody() {
        if (this.backgroundBody.nativeElement) {
            this.backgroundExpanded = !this.backgroundExpanded;
        }
    };
    toggleInterestBody() {
        if (this.interestBody.nativeElement) {
            this.interestExpanded = !this.interestExpanded;
        }
    };
}