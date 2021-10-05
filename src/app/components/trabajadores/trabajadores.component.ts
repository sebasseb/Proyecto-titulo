import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/class/producto';
import { Trabajador } from 'src/app/class/trabajador';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.less']
})
export class TrabajadoresComponent implements OnInit {
  ArrayTrabajadores: Array<Trabajador> = [];
  newTrabajador: Trabajador = new Trabajador;

  constructor() {

    
   }

  ngOnInit(): void {
  }

  public addOrEditProducto() {
    if (this.newTrabajador.idTrabajador === 0) {
      this.newTrabajador.idTrabajador = this.ArrayTrabajadores.length + 1;
      this.ArrayTrabajadores.push(this.newTrabajador);

    }
    this.newTrabajador = new Trabajador();
    console.log(this.ArrayTrabajadores)
  }

}
