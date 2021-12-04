import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaFuncionalComponent } from './reserva-funcional.component';

describe('ReservaFuncionalComponent', () => {
  let component: ReservaFuncionalComponent;
  let fixture: ComponentFixture<ReservaFuncionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaFuncionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaFuncionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
