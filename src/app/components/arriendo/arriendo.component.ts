import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../class/reserva';
import { ReservasService } from '../../servicios/reservas.service';
import * as moment from 'moment';


@Component({
  selector: 'app-arriendo',
  templateUrl: './arriendo.component.html',
  styleUrls: ['./arriendo.component.less'],
  providers: [ReservasService]
})
export class ArriendoComponent implements OnInit {
 
  ArrayReservas: Array<Reserva>;
  newReserva: Reserva;
  
  constructor(private reservaServicio : ReservasService) {
    this.ArrayReservas = [];
    this.newReserva = new Reserva();
  }

  ngOnInit(): void {

    this.obtenerReservas();
  }

  public obtenerReservas() {
    this.reservaServicio.obtenerReservas().subscribe((res) => {
      this.ArrayReservas = res;
    });

  }
  
  /**
   * addOrEditReserva
   */
  
  public addOrEditReserva() {
    if (this.newReserva.id === 0) {

      this.newReserva.id = this.ArrayReservas.length + 1;
      
      this.reservaServicio.agregarReserva(this.newReserva).subscribe(
        datos => {
          if (datos === null) {
            this.ArrayReservas.push(this.newReserva);
          } else {
            console.log('no se agrego');

          }
        }
      )
      
      
      this.obtenerReservas();
    }
    if (this.newReserva.id > 0) {
      
      
     this.reservaServicio.editarReserva(this.newReserva).subscribe();
    }
    this.newReserva = new Reserva();
  }

  /**
   * delete
   */
  
  public delete() {
    if (confirm('¿Seguro quieres eliminar esta entrada?')) {
      this.ArrayReservas = this.ArrayReservas.filter(elem => elem != this.newReserva);
      this.reservaServicio.eliminarReserva(this.newReserva.id).subscribe();



      this.newReserva = new Reserva();


    }

  }
  /**
   * openForEdit
   */
  public openForEdit(reserva : Reserva) {
    this.newReserva = reserva;
    
  }
 
}



