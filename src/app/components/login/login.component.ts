import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api.service';
import { LoginI } from "../../modelos/login.interface";

import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';


import { TrabajadoresService } from 'src/app/servicios/trabajadores.service';
import { Trabajador } from 'src/app/class/trabajador';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  trabajador: Trabajador = new Trabajador;
  data: any;

  loginForm = new FormGroup({
    rut: new FormControl('', Validators.required),
    passwd: new FormControl('', Validators.required)
  })

 
  
   
  constructor(private auth : AuthService, private cookieService : CookieService ) { }

  ngOnInit(): void {
    
    
  }

  onLogin() {
   // this.buscarTrabajador(this.loginForm.controls['usuario'].value);
    this.auth.login(this.trabajador).subscribe(
      (data) => {
        this.cookieService.set('token', data.toString());
       //
        
        
      }
      
    );
     
    
  }

  

  
}
