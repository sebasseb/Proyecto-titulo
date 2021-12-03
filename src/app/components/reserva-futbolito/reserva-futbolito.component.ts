import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { DatePickerComponent } from '../date-picker/date-picker.component';


@Component({
  selector: 'app-reserva-futbolito',
  templateUrl: './reserva-futbolito.component.html',
  styleUrls: ['./reserva-futbolito.component.less']
})
export class ReservaFutbolitoComponent implements OnInit {

  reserva: string;

  constructor(private _datepicker : DatePickerComponent) {
    this.reserva = "futbolito";
   }

  ngOnInit(): void {
    
    
  }


 

}
