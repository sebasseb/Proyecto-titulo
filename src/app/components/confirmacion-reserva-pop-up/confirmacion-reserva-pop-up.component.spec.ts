import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionReservaPopUpComponent } from './confirmacion-reserva-pop-up.component';

describe('ConfirmacionReservaPopUpComponent', () => {
  let component: ConfirmacionReservaPopUpComponent;
  let fixture: ComponentFixture<ConfirmacionReservaPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacionReservaPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionReservaPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
