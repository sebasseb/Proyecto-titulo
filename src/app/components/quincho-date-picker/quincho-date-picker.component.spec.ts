import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinchoDatePickerComponent } from './quincho-date-picker.component';

describe('QuinchoDatePickerComponent', () => {
  let component: QuinchoDatePickerComponent;
  let fixture: ComponentFixture<QuinchoDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuinchoDatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuinchoDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
