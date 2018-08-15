import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationComponent } from './education.component';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain necessary messages', () => {
    expect(component.hsMessage).toBeDefined();
    expect(component.uconnMessage).toBeDefined();
  });

  it('should toggle HS body', () =>{
    component.hsExpanded = false;
    component.toggleHsBody();
    expect(component.hsExpanded).toEqual(true);
  });

  it('should toggle college body', () =>{
    component.collegeExpanded = false;
    component.toggleCollegeBody();
    expect(component.collegeExpanded).toEqual(true);
  });
});
