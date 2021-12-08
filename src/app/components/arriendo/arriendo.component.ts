import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../class/reserva';
import { ReservasService } from '../../servicios/reservas.service';
import * as moment from 'moment';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-arriendo',
  templateUrl: './arriendo.component.html',
  styleUrls: ['./arriendo.component.less'],
  providers: [ReservasService]
})
export class ArriendoComponent implements OnInit {
 
  ArrayReservas: Array<Reserva>;
  newReserva: Reserva;


  sortBy!: string;
  searchInput!: string;
  
  constructor(private reservaServicio : ReservasService) {
    this.ArrayReservas = [];
    this.newReserva = new Reserva();
  }

  ngOnInit(): void {

    this.obtenerReservas();
  }

  SortBy(sortBy: string) {
    this.sortBy = sortBy;
  }


  public obtenerReservas() {
    this.reservaServicio.obtenerReservas().subscribe((res) => {
      this.ArrayReservas = res;
    });

  }

  searchBy() {
    const searchConfig = {
      sortBy: this.sortBy,
      searchInput: this.searchInput  
    }

    
    

    try {
      this.reservaServicio.searchBy(searchConfig).subscribe(
      (res) => {

        console.log(res);
        var json = JSON.stringify(res);
        this.ArrayReservas = JSON.parse(json);
       
        
      }
    )
    } catch (e: any) {
      this.ArrayReservas = new Array;
    }
    


    
  }
  
  setReserva(reserva : string) {
    this.newReserva.reserva = reserva;

    
 }
  
  public addOrEditReserva() {
   
    if (this.newReserva.datetime !== '' || this.newReserva.datetime !== null || this.newReserva.datetime!== '') {
      
      
     this.reservaServicio.editarReserva(this.newReserva).subscribe();
    }
    this.newReserva = new Reserva();
    window.location.reload();
  }

  /**
   * delete
   */
  
  public delete() {
    if (confirm('¿Seguro quieres eliminar esta entrada?')) {
      this.ArrayReservas = this.ArrayReservas.filter(elem => elem != this.newReserva);
      this.reservaServicio.eliminarReserva(this.newReserva).subscribe();



      this.newReserva = new Reserva();
      window.location.reload();

    }

  }
  /**
   * openForEdit
   */
  public openForEdit(reserva : Reserva) {
    this.newReserva = reserva;
  
    
    
  }
 
}



