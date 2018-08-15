import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle calculator body', () => {
    component.calculatorExpanded = false;
    component.toggleCalculatorBody();
    expect(component.calculatorExpanded).toEqual(true);
  });

  it('should switch to general tab', () => {
    component.generalTab();
    expect(component.showFactorial).toEqual(false);
    expect(component.showPhysics).toEqual(false);
    expect(component.showGeneral).toEqual(true);
  });

  it('should switch to physics tab', () => {
    component.physicsTab();
    expect(component.showFactorial).toEqual(false);
    expect(component.showPhysics).toEqual(true);
    expect(component.showGeneral).toEqual(false);
  });

  it('should switch to factorial tab', () => {
    component.factorialTab();
    expect(component.showFactorial).toEqual(true);
    expect(component.showPhysics).toEqual(false);
    expect(component.showGeneral).toEqual(false);
  });

  it('should calculate initial velocity', () => {
    component.haveVi = false;
    component.haveAcc = true;
    component.haveTime = true;
    component.haveVf = true;
    component.acceleration = 2;
    component.time = 5;
    component.Vf = 20;
    component.getVi();
    expect(component.Vi).toEqual(10);
  });

  it('should calculate final velocity', () => {
    component.haveVf = false;
    component.haveDis = true; 
    component.haveVi = true;
    component.haveAcc = true;
    component.displacement = 4;
    component.Vi = 0;
    component.acceleration = 2;
    component.getVf();
    expect(component.Vf).toEqual(4);
  });

  it('should calculate displacement', () =>{
    component.haveDis = false;
    component.haveVi = true; 
    component.haveTime = true;
    component.haveAcc = true;
    component.Vi = 3;
    component.acceleration = 2;
    component.time = 5;
    component.getDis();
    expect(component.displacement).toEqual(40);
  });

  it('should calculate time', () => {
    component.haveTime = false;
    component.haveDis = true;
    component.haveVi = true;
    component.haveVf = true;
    component.displacement = 10;
    component.Vi = 0;
    component.Vf = 5;
    component.getTime();
    expect(component.time).toEqual(4);
  });

  it('should calculate acceleration', () => {
    component.haveAcc = false;
    component.haveVi = true;
    component.haveVf = true;
    component.haveTime = true;
    component.Vi = 3;
    component.Vf = 13;
    component.time = 5;
    component.getAcc();
    expect(component.acceleration).toEqual(2);
  });

});
