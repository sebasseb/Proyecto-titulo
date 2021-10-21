import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Trabajador } from '../class/trabajador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {
  URL: any = "/canchaseb/src/app/api/Trabajadores/";

  constructor(private http: HttpClient) { }
  
  obtenerTrabajadores():Observable<any> {
    return this.http.get(`${this.URL}obtenerTrabajadores.php`);
  }
  agregarTrabajador(trabajador: Trabajador) {
    
    return this.http.post(`${this.URL}agregarTrabajador.php`, JSON.stringify(trabajador));
  }

  eliminarTrabajador(id: number) {
    return this.http.get(`${this.URL}eliminarTrabajador.php?id=${id}`);
  }


  buscarTrabajador(rut: string) {
    return this.http.get(`${this.URL}buscarTrabajador.php?rut=${rut}`);
  }

  editarTrabajador(trabajador: Trabajador) {
    return this.http.post(`${this.URL}editarTrabajadores.php`, JSON.stringify(trabajador));
  }
}
