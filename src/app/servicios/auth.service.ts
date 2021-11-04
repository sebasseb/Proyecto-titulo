import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trabajador } from '../class/trabajador';
import { JwtResponseI } from '../interface/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  URL: any = "/canchaseb/src/app/api/Login/";

  constructor(private httpClient: HttpClient) { }

  login(trabajador: Trabajador) {
    return this.httpClient.post(`${this.URL}buscarTrabajador.php`,JSON.stringify(trabajador));
  }

  

}
