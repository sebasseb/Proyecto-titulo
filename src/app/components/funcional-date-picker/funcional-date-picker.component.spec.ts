import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalDatePickerComponent } from './funcional-date-picker.component';

describe('FuncionalDatePickerComponent', () => {
  let component: FuncionalDatePickerComponent;
  let fixture: ComponentFixture<FuncionalDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionalDatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionalDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
