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

    this.obtenerTrabajadores();
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

    //console.log(this.ArrayTrabajadores)
  }

  /*public buscarTrabajador(rut: string): boolean {

    this.trabajadoresServicio.buscarTrabajador(rut).subscribe(res => {
      console.log(res);
      
      if (res === null) {
        console.log('false');
        
        return false;
      }
      console.log('true');
      
      return true;
    }
    
    );
    return false;


  }*/



  public openForEdit(trabajador: Trabajador) {
    this.newTrabajador = trabajador;
 

  }

  public delete() {
    if (confirm('¿Seguro quieres eliminar esta entrada?')) {
      this.ArrayTrabajadores = this.ArrayTrabajadores.filter(elem => elem != this.newTrabajador);
      this.trabajadoresServicio.eliminarTrabajador(this.newTrabajador.id).subscribe(
        datos => { }
      )



      this.newTrabajador = new Trabajador();


    }


  }




}
