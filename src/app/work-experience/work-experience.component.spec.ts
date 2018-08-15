import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceComponent } from './work-experience.component';

describe('WorkExperienceComponent', () => {
  let component: WorkExperienceComponent;
  let fixture: ComponentFixture<WorkExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain necessary messages', () => {
    expect(component.travelersMessage).toBeDefined();
    expect(component.putnamMessage).toBeDefined();
    expect(component.kiwiMessage).toBeDefined();
  });

  it('should toggle travelers body', () =>{
    component.travelersExpanded = false;
    component.toggleTravelersBody();
    expect(component.travelersExpanded).toEqual(true);
  });

  it('should toggle putnam body', () =>{
    component.putnamExpanded = false;
    component.togglePutnamBody();
    expect(component.putnamExpanded).toEqual(true);
  });

  it('should toggle kiwi body', () =>{
    component.kiwiExpanded = false;
    component.toggleKiwiBody();
    expect(component.kiwiExpanded).toEqual(true);
  });
});
