import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Reserva } from 'src/app/class/reserva';
import { ReservasService } from 'src/app/servicios/reservas.service';
import { Moment } from 'moment';
import * as moment from 'moment';
import { formatDate } from '@angular/common';
import { async } from 'rxjs';

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


  arrayHoras = new Array;



  constructor(private calendar: NgbCalendar, private config: NgbDatepickerConfig, private reservasServicio: ReservasService) {
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
    var btn1 = <HTMLInputElement>document.getElementById('15');
    btn1.disabled = true;
    var btn2 = <HTMLInputElement>document.getElementById('16');
    btn2.disabled = true;
    var btn3 = <HTMLInputElement>document.getElementById('17');
    btn3.disabled = true;
    var btn4 = <HTMLInputElement>document.getElementById('18');
    btn4.disabled = true;
    var btn5 = <HTMLInputElement>document.getElementById('19');
    btn5.disabled = true;
    var btn6 = <HTMLInputElement>document.getElementById('20');
    btn6.disabled = true;
    var btn7 = <HTMLInputElement>document.getElementById('21');
    btn7.disabled = true;
    var btn8 = <HTMLInputElement>document.getElementById('22');
    btn8.disabled = true;
    var btnReservar = <HTMLInputElement>document.getElementById('reservar');
    btnReservar.disabled = true;
  }



  save(reserva: string) {

    this.newReserva.hora = this.hour;

    this.newReserva.rutCliente = this.rut;
    this.newReserva.nombreCliente = this.name;
    this.newReserva.telefono = this.phone;

    this.newReserva.reserva = reserva;

    const date = new Date;

    date.setFullYear(this.model.year, this.model.month - 1, this.model.day);
    date.setHours(this.hour, 0, 0);


    const formatedDate = formatDate(date, 'yyyy-MM-dd HH:mm:ss', 'en-US');

    this.newReserva.datetime = formatedDate;
    console.log(this.newReserva);
    console.log(this.arrayHoras);

    console.log('arrayHoras.length: ' + this.arrayHoras.length);
    //console.log(this.newReserva.datetime.substring(11, 13));

    const currentHour = this.newReserva.datetime.substring(11, 13);
    console.log('currentHour: ' + currentHour);



    /*
    for (let i = 0; i < this.arrayHoras.length; i++) {
      for (let j = 0; this.arrayHoras[i].length; j++) {
        console.log(this.arrayHoras[i][j]);

      }
    }
*/
    //this.reservasServicio.agregarReserva(this.newReserva).subscribe();

    //this.reservasServicio.agregarReserva(this.newReserva).subscribe();







  }
  enableAllBtn() {
    for (let i = 15; i < 23; i++) {
      var btn = <HTMLInputElement>document.getElementById(i + "");
      btn.disabled = false;
    }
    var btnReservar = <HTMLInputElement>document.getElementById('reservar');
    btnReservar.disabled = false;
  }

  buscarReserva() {
    this.enableAllBtn();
    const date = new Date;

    date.setFullYear(this.model.year, this.model.month - 1, this.model.day);

    const formatedDate = formatDate(date, 'yyyy-MM-dd', 'en-US');

    this.reservasServicio.buscarReserva(formatedDate).subscribe(
      (res) => {
        if (res !== null) {

          this.arrayHoras = Array.of(res);

          for (let i = 0; i < this.arrayHoras.length; i++) {
            for (let j = 0; j < this.arrayHoras[i].length; j++) {
              //console.log(this.arrayHoras[i][j] + "");
              var btn = <HTMLInputElement>document.getElementById(this.arrayHoras[i][j] + "");
              btn.disabled = true;


            }


          }

        }

      }
    );



    /*
        
    */
  }



}

