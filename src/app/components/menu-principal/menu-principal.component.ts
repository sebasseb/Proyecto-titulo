import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { isDate } from 'moment';
import { CookieService } from 'ngx-cookie-service';
import { Trabajador } from 'src/app/class/trabajador';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.less']
})
export class MenuPrincipalComponent implements OnInit {
  


  cookie: string = '';
  trabajador: any;
  isAdmin!: number;


  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    //let httpHeaders: HttpHeaders = new HttpHeaders();
    //const token = sessionStorage.getItem('token');
    //console.log('get token', token);

    //httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);
    this.cookie = this.cookieService.get('token');
    //console.log(this.cookie);

    const decodedCookie = atob(this.cookie);

    //console.log(decodedCookie);
    //console.log(JSON.parse(decodedCookie));
    
    this.trabajador = JSON.parse(decodedCookie);
    

    this.isAdmin = this.trabajador[0].isAdmin;
    
    
    if (this.isAdmin == 0) {

      (<HTMLInputElement> document.getElementById("trabajadores")).disabled = true;
  }
    
    
    

  }

  delCookies() {
    this.cookieService.delete('token');
    
  }

}
