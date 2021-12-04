import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbCalendar, NgbDateStruct, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Reserva } from 'src/app/class/reserva';
import { ReservasService } from 'src/app/servicios/reservas.service';
import { ConfirmacionReservaPopUpComponent } from '../confirmacion-reserva-pop-up/confirmacion-reserva-pop-up.component';
import { formatDate } from '@angular/common';
import { ReservaFutbolitoComponent } from '../reserva-futbolito/reserva-futbolito.component';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less'],
 

})

export class DatePickerComponent implements OnInit, OnDestroy {
  model!: NgbDateStruct;
  date!: { year: number; month: number; };
  hour!: number;
  name!: string;
  rut!: string;
  phone!: number;


  reserva:string = 'futbolito';


  newReserva: Reserva;


  arrayHoras = new Array;



  constructor(private calendar: NgbCalendar,
    private config: NgbDatepickerConfig,
    private reservasServicio: ReservasService,) {
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
  ngOnDestroy(): void {
    
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

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    window.location.reload();
  }




  selectToday() {
    this.model = this.calendar.getToday();
    console.log(this.model.day);
    console.log(this.model.month);




  }


  setHour(hour: number) {
    this.hour = hour;


  }







  save() {


    this.newReserva.hora = this.hour;

    this.newReserva.rutCliente = this.rut;
    this.newReserva.nombreCliente = this.name;
    this.newReserva.telefono = this.phone;
    this.newReserva.reserva = this.getReserva();


    const date = new Date;

    date.setFullYear(this.model.year, this.model.month - 1, this.model.day);
    date.setHours(this.hour, 0, 0);


    const formatedDate = formatDate(date, 'yyyy-MM-dd HH:mm:ss', 'en-US');

    this.newReserva.datetime = formatedDate;

    console.log(this.newReserva);






    if (this.newReserva.rutCliente !== undefined || this.newReserva.nombreCliente !== undefined || this.newReserva.telefono !== undefined) {
      console.log(this.newReserva.rutCliente);
      console.log(this.newReserva.nombreCliente);
      console.log(this.newReserva.telefono);

      this.reservasServicio.agregarReserva(this.newReserva).subscribe();
      this.openPopup();

    } else {
      window.alert("Llene los campos con su información para hacer una reserva");
    }


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
  
  disableAllBtn() {
    for (let i = 15; i < 23; i++) {
      var btn = <HTMLInputElement>document.getElementById(i + "");
      btn.disabled = false;
    }
    var btnReservar = <HTMLInputElement>document.getElementById('reservar');
    btnReservar.disabled = true;
  }

  getReserva() {
    return this.reserva;
  }

  buscarReserva() {
    this.enableAllBtn();
    const date = new Date;

    date.setFullYear(this.model.year, this.model.month - 1, this.model.day);

    const formatedDate = formatDate(date, 'yyyy-MM-dd', 'en-US');

    this.newReserva.datetime = formatedDate;

    this.newReserva.reserva = this.getReserva();

    console.log(this.newReserva);


    this.reservasServicio.buscarReserva(this.newReserva).subscribe(
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

