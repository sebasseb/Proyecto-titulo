import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.less']
})
export class MenuPrincipalComponent implements OnInit {
  
  

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    //let httpHeaders: HttpHeaders = new HttpHeaders();
    //const token = sessionStorage.getItem('token');
    //console.log('get token', token);

    //httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);
    
    
    

  }

}
