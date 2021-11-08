import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trabajador } from '../class/trabajador';

import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import { LoginI } from '../modelos/login.interface';
import { ResponseI } from '../modelos/response.interface';

@Injectable()
export class AuthService {
  URL: any = "/canchaseb/src/app/api/Login/";

  constructor(private httpClient: HttpClient) { }

  login(login: LoginI) {
    
    return this.httpClient.post<any>(`${this.URL}buscarTrabajador.php`, JSON.stringify(login), {
      observe: 'response'
    });
  }

  

}
