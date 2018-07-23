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