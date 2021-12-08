import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaPopUpComponent } from './venta-pop-up.component';

describe('VentaPopUpComponent', () => {
  let component: VentaPopUpComponent;
  let fixture: ComponentFixture<VentaPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
