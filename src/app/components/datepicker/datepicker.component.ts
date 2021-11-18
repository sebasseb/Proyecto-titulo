import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.less']
})
export class DatepickerComponent implements OnInit {

  selectedDate!: any;

  constructor() { }

  ngOnInit(): void {
  }


  showDate() {
    console.log(this.selectedDate);;
    
  }

}
