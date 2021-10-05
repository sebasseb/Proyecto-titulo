import { Component, OnDestroy, OnInit } from '@angular/core';

import { Producto } from '../../class/producto';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.less']
})
export class InventarioComponent implements  OnInit {
  ArrayProductos: Array<Producto>;
  newProducto: Producto;

  




  constructor() {
    this.ArrayProductos = [];
    this.newProducto = new Producto();

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
    if (confirm('¿Seguro quieres eliminar esta entrada?')) {
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
