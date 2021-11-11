import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaFutboltenisComponent } from './reserva-futboltenis.component';

describe('ReservaFutboltenisComponent', () => {
  let component: ReservaFutboltenisComponent;
  let fixture: ComponentFixture<ReservaFutboltenisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaFutboltenisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaFutboltenisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
