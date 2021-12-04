import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaQuinchoComponent } from './reserva-quincho.component';

describe('ReservaQuinchoComponent', () => {
  let component: ReservaQuinchoComponent;
  let fixture: ComponentFixture<ReservaQuinchoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaQuinchoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaQuinchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
