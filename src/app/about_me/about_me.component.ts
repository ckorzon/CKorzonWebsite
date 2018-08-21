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
    @ViewChild('aboutBody') aboutBody: ElementRef;
    // expanded: boolean;
    interestExpanded: boolean;
    backgroundExpanded: boolean;
    aboutExpanded: boolean;

    backgroundMessage= `My name is Conrad Korzon, I am currently a Computer Science Major undergraduate at the University of Connecticut. 
    I grew up in the small town of Middlefield, Connecticut, and attended Coginchaug Regional High School in Durham, CT.`;

    interestMessage= `My interests include technology, history, travel, games, books, movies, and music. Growing up my hobbies and interests were primarily focused
    around history - all of my family vacations were to historical sites in the country and I spent much of my time reading books, watching documentaries, and building
    models related to history. I have also always appreciated fictional novels or other media, movies or otherwise, which might inspire creativity or imagination.
    Once I reached High School I developed an interest in computers and programming, which I originally had become interested in through my hobby of playing computer games
    with friends. Since that point as my knowledge of what can be accomplished through technology has expanded, so has my passion for it.`;

    aboutSiteMessage=`This site was built using Angular 6, and primarily generated using Angular Material - the side navigation bar for example was purely generated through 
    angular material, and all other components were initially created with the 'ng generate component' functionality. The purpose of this site is to act as an example of my 
    work, as well as to deliver a more in depth description of experiences and skills which may appear on my resume. Additionally, this site has been designed to function
    and display properly both in desktop and mobile view.`;

    constructor() { }

    ngOnInit() {

    }

    toggleAboutBody(){
        if(this.aboutBody.nativeElement) {
            this.aboutExpanded = !this.aboutExpanded;
        }
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