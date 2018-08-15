import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutMeComponent } from './about_me.component';

describe('AboutMeComponent', () => {
    let component: AboutMeComponent;
    let fixture: ComponentFixture<AboutMeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AboutMeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AboutMeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should toggle AboutBody', () => {
        component.aboutExpanded = true;
        component.toggleAboutBody();
        expect(component.aboutExpanded).toEqual(false);
    });

    it('should toggle BackgroundBody', () => {
        component.backgroundExpanded = true;
        component.toggleBackgroundBody();
        expect(component.backgroundExpanded).toEqual(false);
    });

    it('should toggle InterestBody', () => {
        component.interestExpanded = false;
        component.toggleInterestBody();
        expect(component.interestExpanded).toEqual(true);
    });

    it('should include the needed messages', () => {
        expect(component.backgroundMessage).toBeDefined();
        expect(component.aboutSiteMessage).toBeDefined();
        expect(component.interestMessage).toBeDefined();
    })


});