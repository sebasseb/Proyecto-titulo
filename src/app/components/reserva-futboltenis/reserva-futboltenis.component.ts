import { Component, OnInit } from '@angular/core';
import { DatePickerComponent } from '../date-picker/date-picker.component';

@Component({
  selector: 'app-reserva-futboltenis',
  templateUrl: './reserva-futboltenis.component.html',
  styleUrls: ['./reserva-futboltenis.component.less']
})
export class ReservaFutboltenisComponent implements OnInit {
  reserva: string;

  constructor(private _datepicker : DatePickerComponent) {
    this.reserva = 'futtenis';
   }

  ngOnInit(): void {
    this._datepicker.reserva = this.reserva;

  }

}
