import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioFutbolitoComponent } from './calendario-futbolito.component';

describe('CalendarioFutbolitoComponent', () => {
  let component: CalendarioFutbolitoComponent;
  let fixture: ComponentFixture<CalendarioFutbolitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioFutbolitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioFutbolitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
