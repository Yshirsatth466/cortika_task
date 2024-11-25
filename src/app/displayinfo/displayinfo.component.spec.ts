import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayinfoComponent } from './displayinfo.component';

describe('DisplayinfoComponent', () => {
  let component: DisplayinfoComponent;
  let fixture: ComponentFixture<DisplayinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
