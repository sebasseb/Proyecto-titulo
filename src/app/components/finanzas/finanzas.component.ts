import { Component, OnInit } from '@angular/core';
import { Trabajador } from 'src/app/class/trabajador';
import { TrabajadoresService } from 'src/app/servicios/trabajadores.service';


@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.less']
})
export class FinanzasComponent implements OnInit {
  ArrayTrabajadores: Array<Trabajador> = [];
  newTrabajador!: Trabajador;
  constructor(private trabajadoresServicio: TrabajadoresService) {

  }

  ngOnInit(): void {
    this.newTrabajador = new Trabajador();
    this.obtenerTrabajadores();
    //console.log(this.newTrabajador);
    
  }


  public obtenerTrabajadores() {
    this.trabajadoresServicio.obtenerTrabajadores().subscribe((res) => {
      this.ArrayTrabajadores = res;
      //onsole.log('RES:',res);
    });
  }

  openForEdit(trabajador: Trabajador) {
    this.newTrabajador = trabajador;
  }


  editar() {
    //console.log(this.newTrabajador);
  // console.log(this.newTrabajador.salario);
    //console.log(this.newTrabajador);
    //console.log(this.newTrabajador.salario);
    
  
    
    this.trabajadoresServicio.editarTrabajador(this.newTrabajador).subscribe();
    this.obtenerTrabajadores();
  }

}
