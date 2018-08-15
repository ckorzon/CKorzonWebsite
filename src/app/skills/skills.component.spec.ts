import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle general body', () =>{
    component.generalExpanded = false;
    component.toggleGeneralBody();
    expect(component.generalExpanded).toEqual(true);
  });

  it('should toggle technical body', () =>{
    component.technicalExpanded = true;
    component.toggleTechnicalBody();
    expect(component.technicalExpanded).toEqual(false);
  });
});
