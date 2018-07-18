
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideMenuComponent } from './side-menu.component';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [SideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
