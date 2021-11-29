import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less']
})
export class DatePickerComponent implements OnInit {
  model!: NgbDateStruct;
  date!: { year: number; month: number; };

  constructor(private calendar: NgbCalendar) {
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
