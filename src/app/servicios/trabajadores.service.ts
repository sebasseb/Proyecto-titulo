import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Trabajador } from '../class/trabajador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {
  URL: any = "http://localhost/canchaseb/src/app/api/Trabajadores/";

  constructor(private http: HttpClient) { }
  
  obtenerTrabajadores():Observable<any> {
    return this.http.get(`${this.URL}obtenerTrabajadores.php`);
  }
  agregarTrabajador(trabajador: Trabajador) {
    
    return this.http.post(`${this.URL}agregarTrabajador.php`, JSON.stringify(trabajador));
  }

  eliminarTrabajador(idTrabajador: number) {
    return this.http.get(`${this.URL}eliminarTrabajador.php?idTrabajador=${idTrabajador}`);
  }

  seleccionarTrabajador(idTrabajador: number) {
    return this.http.get(`${this.URL}seleccionarTrabajador.php?idUsuario=${idTrabajador}`);
  }

  editarTrabajador(trabajador: Trabajador) {
    return this.http.post(`${this.URL}EditarUsuario.php`, JSON.stringify(trabajador));
  }
}
