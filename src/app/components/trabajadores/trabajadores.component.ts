import { Component, OnInit } from '@angular/core';

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
  trabajador: any;

  constructor(private trabajadoresServicio: TrabajadoresService) {
    this.ArrayTrabajadores = [];
    this.newTrabajador = new Trabajador();
    this.trabajador = null;

    
   }

  ngOnInit(): void {

    this.obtenerTrabajadores();
  }

  obtenerTrabajadores() {
    this.trabajadoresServicio.obtenerTrabajadores().subscribe((res) => {
      this.ArrayTrabajadores = res;
      //conexion
    });
  }

  public addOrEditTrabajador() {
    if (this.newTrabajador.idTrabajador === 0) {
      this.newTrabajador.idTrabajador = this.ArrayTrabajadores.length + 1;
      this.ArrayTrabajadores.push(this.newTrabajador);

    }
    this.newTrabajador = new Trabajador();
    console.log(this.ArrayTrabajadores)
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
