import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Trabajador } from 'src/app/class/trabajador';
import { TrabajadoresService } from '../../servicios/trabajadores.service'
import { valHooks } from 'jquery';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.less'],
  providers: [TrabajadoresService]
})
export class TrabajadoresComponent implements OnInit {
  ArrayTrabajadores: Array<Trabajador>;
  newTrabajador: Trabajador;



  constructor(private trabajadoresServicio: TrabajadoresService) {
    this.ArrayTrabajadores = [];
    this.newTrabajador = new Trabajador();



  }

  ngOnInit(): void {
    this.newTrabajador = new Trabajador();
    this.obtenerTrabajadores();

   
    
  }
  setAdmin(bool: boolean) {
    this.newTrabajador.isAdmin = bool;
  }

  public obtenerTrabajadores() {
    this.trabajadoresServicio.obtenerTrabajadores().subscribe((res) => {
      this.ArrayTrabajadores = res;
      //console.log('RES:',res);
    });
  }

  public addOrEditTrabajador() {
    
    if (this.newTrabajador.id === 0) {

      this.newTrabajador.id = this.ArrayTrabajadores.length + 1;

      this.trabajadoresServicio.agregarTrabajador(this.newTrabajador).subscribe(
        datos => {
          if (datos === null) {
            this.ArrayTrabajadores.push(this.newTrabajador);
          } else {
            console.log('no se agrego');

          }
        }
      )
      
      
      this.obtenerTrabajadores();
    }
    if (this.newTrabajador.id > 0) {
      
      
      this.trabajadoresServicio.editarTrabajador(this.newTrabajador).subscribe();
    }
    this.newTrabajador = new Trabajador();
    window.location.reload();

    //console.log(this.ArrayTrabajadores)
  }

 



  public openForEdit(trabajador: Trabajador) {
    this.newTrabajador = trabajador;

  }

  public delete() {
    if (confirm('¿Seguro quieres eliminar esta entrada?')) {
      this.ArrayTrabajadores = this.ArrayTrabajadores.filter(elem => elem != this.newTrabajador);
      this.trabajadoresServicio.eliminarTrabajador(this.newTrabajador.id).subscribe();



      this.newTrabajador = new Trabajador();
      window.location.reload();


    }


  }




}
