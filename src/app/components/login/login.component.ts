import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginI } from "../../modelos/login.interface";

import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';


import { TrabajadoresService } from 'src/app/servicios/trabajadores.service';
import { Trabajador } from 'src/app/class/trabajador';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit, OnDestroy {
  trabajador: Trabajador = new Trabajador;
  data: any;

  loginForm = new FormGroup({
    rut: new FormControl('', Validators.required),
    passwd: new FormControl('', Validators.required)
  })

  subRef$!: Subscription;



  constructor(
    private auth: AuthService,
    private cookieService: CookieService,
    private router: Router

  ) { }
  ngOnDestroy(): void {
    if (this.subRef$) {
      this.subRef$.unsubscribe();
    }
    
  }

  ngOnInit(): void {


  }



  onLogin() {
    // this.buscarTrabajador(this.loginForm.controls['usuario'].value);

    const loginUsuario: LoginI = {
      usuario: this.loginForm.value.rut,
      password: this.loginForm.value.passwd,
    };

    this.subRef$ = this.auth.login(loginUsuario).subscribe(
      res => {
        //console.log(res);
        if (res.body !== 'null') {

          const dateNow = new Date();
          //dateNow.setMinutes(dateNow.getMinutes() + 1);
          dateNow.setHours(dateNow.getHours() + 1);
          
          this.cookieService.set('token', res.body.token,dateNow);
          console.log(res.body.token);



          this.router.navigate(['/menu-principal']);


        } else {
          alert('Login incorrecto');
          this.router.navigate(['/login']);
        }
        //this.router.navigate(['/menu-principal']);



      },
      err => {
        console.log('Error Login', err);
      });




  }




}


