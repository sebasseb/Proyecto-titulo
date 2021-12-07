import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Reserva } from '../class/reserva';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  URL: any = "/canchaseb/src/app/api/Reservas/";

  constructor(private http: HttpClient) { }
  
  obtenerReservas():Observable<any> {
    return this.http.get(`${this.URL}obtenerReservas.php`);
  }
  agregarReserva(reserva: Reserva) {
    
    return this.http.post(`${this.URL}agregarReserva.php`, JSON.stringify(reserva));
  }

  eliminarReserva(reserva: Reserva) {
    return this.http.post(`${this.URL}eliminarReserva.php`, JSON.stringify(reserva));
  }


  buscarReserva(reserva : Reserva) {
    return this.http.post(`${this.URL}buscarReserva.php`, JSON.stringify(reserva));
  }

  editarReserva(reserva: Reserva) {
    return this.http.post(`${this.URL}editarReserva.php`, JSON.stringify(reserva));
  }

  searchBy(objeto : any) {
    return this.http.post(`${this.URL}searchBy.php`, JSON.stringify(objeto));
  }
}
