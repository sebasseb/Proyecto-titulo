import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

import { Trabajador } from 'src/app/class/trabajador';
import {TrabajadoresService } from '../../servicios/trabajadores.service'

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.less'],
  providers: [TrabajadoresService]
})
export class TrabajadoresComponent implements OnInit {
  ArrayTrabajadores: Array<Trabajador>;
  newTrabajador: Trabajador;
  http!: HttpClient;
 

  constructor(private trabajadoresServicio: TrabajadoresService) {
    this.ArrayTrabajadores = [];
    this.newTrabajador = new Trabajador();
    

    
   }

  ngOnInit(): void {

    this.obtenerTrabajadores();
  }

  obtenerTrabajadores() {
    this.trabajadoresServicio.obtenerTrabajadores().subscribe((res) => {
      this.ArrayTrabajadores = res;
      //console.log('RES:',res);
    });
  }

  public addOrEditTrabajador() {
    if (this.newTrabajador.id === 0) {
      this.newTrabajador.id = this.ArrayTrabajadores.length + 1;
      this.ArrayTrabajadores.push(this.newTrabajador);
      //console.log(JSON.stringify(this.newTrabajador));
      this.trabajadoresServicio.agregarTrabajador(this.newTrabajador).subscribe(
        datos => {
          
        }
      )
      
      
    }
    this.newTrabajador = new Trabajador();
    //console.log(this.ArrayTrabajadores)
  }

  public openForEdit(trabajador: Trabajador) {
    this.newTrabajador = trabajador;

  }

  public delete() {
    if (confirm('¿Seguro quieres eliminar esta entrada?')) {
      this.ArrayTrabajadores = this.ArrayTrabajadores.filter(elem => elem != this.newTrabajador);
      this.newTrabajador = new Trabajador();
    }
  }
}
