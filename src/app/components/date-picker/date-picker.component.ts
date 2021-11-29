import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less']
})
  
export class DatePickerComponent implements OnInit {
  model!: NgbDateStruct;
  date!: { year: number; month: number; };
  

  constructor(private calendar: NgbCalendar, private config: NgbDatepickerConfig) {
    const current = new Date();
    config.minDate = { year: current.getFullYear(), month: 
    current.getMonth() + 1, day: current.getDate() };
      //config.maxDate = { year: 2099, month: 12, day: 31 };
    config.outsideDays = 'hidden';
  
  
  }
  

  selectToday() {
    this.model = this.calendar.getToday();
    console.log(this.model.day);
    console.log(this.model.month);
    
  
    
    
  }


  showModel() {
    console.log(this.model);
  }


  ngOnInit(): void {
  }
  
}
