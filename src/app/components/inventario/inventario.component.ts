import { Component, OnInit } from '@angular/core';
import { Producto } from '../../class/producto';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.less']
})
export class InventarioComponent implements OnInit {
  ArrayProductos: Array<Producto>;
  newProducto: Producto;

  constructor() {
    this.ArrayProductos = [];
    this.newProducto = new Producto();
  }

  ngOnInit(): void {
  }

  /**
   * addProducto  
  */
  public addProducto(producto: Producto) {

    this.ArrayProductos.push(producto);
    this.newProducto = new Producto();
    console.log(this.ArrayProductos);
  }
  /**
   * getProducto
   */
  public getProducto() { return this.newProducto; }
  public getIdProducto() { return this.newProducto.getIdProducto();}
  

  public console(any : any) {
    console.log(any);
  }
}
