import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaPopUpComponent } from './reserva-pop-up.component';

describe('ReservaPopUpComponent', () => {
  let component: ReservaPopUpComponent;
  let fixture: ComponentFixture<ReservaPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
