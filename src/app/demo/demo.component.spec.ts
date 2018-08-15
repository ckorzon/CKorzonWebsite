import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from '../calculator/calculator.component'
import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoComponent, CalculatorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle table box', () => {
    component.tableExpanded = false;
    component.toggleTableBox();
    expect(component.tableExpanded).toEqual(true);
  });

  it('should contain the necessary data', () => {
    expect(component.people).toBeDefined();
    expect()
  });

  it('should sort correctly', () => {
    const mockList = [
      {
        name: "Gustave",
        height: 172,
        age: 24,
        occupation: "Pierogi Chef"
      },
      {
        name: "Frederic",
        height: 195,
        age: 19,
        occupation: "Student"
      },
      {
        name: "Didier",
        height: 180,
        age: 18,
        occupation: "Athlete"
      }
    ];
    mockList.sort(component.activeSort("name", false));
    expect(mockList).toEqual([
      {
        name: "Didier",
        height: 180,
        age: 18,
        occupation: "Athlete"
      },
      {
        name: "Frederic",
        height: 195,
        age: 19,
        occupation: "Student"
      },
      {
        name: "Gustave",
        height: 172,
        age: 24,
        occupation: "Pierogi Chef"
      }
    ])
  })
});
