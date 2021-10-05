import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaFutbolitoComponent } from './reserva-futbolito.component';

describe('ReservaFutbolitoComponent', () => {
  let component: ReservaFutbolitoComponent;
  let fixture: ComponentFixture<ReservaFutbolitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaFutbolitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaFutbolitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
