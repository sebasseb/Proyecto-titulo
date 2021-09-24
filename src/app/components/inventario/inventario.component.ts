import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { Producto } from '../../class/producto';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.less']
})
export class InventarioComponent implements OnDestroy, OnInit {
  ArrayProductos: Array<Producto>;
  newProducto: Producto;

  




  constructor() {
    this.ArrayProductos = [];
    this.newProducto = new Producto();

  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }


  public addOrEditProducto() {
    if (this.newProducto.idProducto === 0) {
      this.newProducto.idProducto = this.ArrayProductos.length + 1;
      this.ArrayProductos.push(this.newProducto);

    }
    this.newProducto = new Producto();
    console.log(this.ArrayProductos)
  }

  /**
   * openForEdit
   */
  public openForEdit(producto: Producto) {
    this.newProducto = producto;

  }

  /**
   * delete
   */
  public delete() {
    if (confirm('¿Seguro quieres elimina esta entrada?')) {
      this.ArrayProductos = this.ArrayProductos.filter(elem => elem != this.newProducto);
      this.newProducto = new Producto();
    }
  }

  /**
   * getProducto
   */
  public getProducto() { return this.newProducto; }
  public getIdProducto() { return this.newProducto.getIdProducto(); }


  public console(any: any) {
    console.log(any);
  }
}
