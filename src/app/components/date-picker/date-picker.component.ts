import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Reserva } from 'src/app/class/reserva';
import { ReservasService } from 'src/app/servicios/reservas.service';
import {Moment } from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less']
})

export class DatePickerComponent implements OnInit {
  model!: NgbDateStruct;
  date!: { year: number; month: number; };
  hour!: number;
  name!: string;
  rut!: string;
  phone!: number;
  reserva!: string;

  newReserva: Reserva;

  
  time = {hour: 15};
  minuteStep = 60;
  



  constructor(private calendar: NgbCalendar, private config: NgbDatepickerConfig, private reservasServicio : ReservasService) {
    const current = new Date();
    config.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };
    //config.maxDate = { year: 2099, month: 12, day: 31 };
    config.outsideDays = 'hidden';

    this.newReserva = new Reserva;
  }


 

  selectToday() {
    this.model = this.calendar.getToday();
    console.log(this.model.day);
    console.log(this.model.month);




  }


  setHour(hour: number) {
    this.hour = hour;
    

  }



  ngOnInit(): void {
  }


  save(reserva : string) {
   
    console.log(this.model.year);
    console.log(this.model.month);
    console.log(this.model.day);
    
/*
    this.newReserva.dia = this.model.day;
    this.newReserva.mes = this.model.month;
    this.newReserva.ano = this.model.year; */
    //this.newReserva.hora = this.hour;

    this.newReserva.rutCliente = this.rut;
    this.newReserva.nombreCliente = this.name;
    this.newReserva.telefono = this.phone;

    this.newReserva.reserva = reserva;
/*
    this.newReserva.datetime.setFullYear(this.model.year, this.model.month, this.model.day);
    this.newReserva.datetime.setHours(this.newReserva.hora,0,0);
*/


    //console.log(this.newReserva);
    

    //console.log(this.newReserva.fecha);
    /*
    this.reservasServicio.agregarReserva(this.newReserva).subscribe(
      (res) => {
        console.log(res);
        
      }
    );*/

  }
}
