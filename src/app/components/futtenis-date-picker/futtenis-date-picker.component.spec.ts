import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuttenisDatePickerComponent } from './futtenis-date-picker.component';

describe('FuttenisDatePickerComponent', () => {
  let component: FuttenisDatePickerComponent;
  let fixture: ComponentFixture<FuttenisDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuttenisDatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuttenisDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
