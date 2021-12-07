import { Component, OnInit } from "@angular/core";
import { Producto } from "src/app/class/producto";
import { ProductosService } from "src/app/servicios/productos.service";


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.less'],
  providers: [ProductosService]
})
export class InventarioComponent implements  OnInit {
  ArrayProductos: Array<Producto>;
  newProducto: Producto;
  

  




  constructor(private productosServicio: ProductosService) {
    this.ArrayProductos = [];
    this.newProducto = new Producto();

  }
  

  ngOnInit(): void {
    this.obtenerProductos();
  }

  public obtenerProductos() {
    this.productosServicio.obtenerProductos().subscribe((res) => {
      this.ArrayProductos = res;
      console.log(res);
      
    })
  }

  public addOrEditProducto() {
    console.log(this.newProducto.id);
    console.log(this.newProducto.nombre);
    console.log(this.newProducto.proveedor);
    console.log(this.newProducto.stock);
    console.log(this.newProducto.valorProducto);
     console.log(this.newProducto);
    if (this.newProducto.id === 0) {

      this.newProducto.id = this.ArrayProductos.length + 1;
      
      this.productosServicio.agregarProducto(this.newProducto).subscribe(
        (res) => {
          console.log(res);
          
        }
      )

      this.obtenerProductos();

      

    }

    if (this.newProducto.id > 0) {
      
      this.productosServicio.editarProducto(this.newProducto).subscribe(
        (res) => {
          console.log(res);
          
        }
      );
      
    }

    this.newProducto = new Producto();
    
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
      this.productosServicio.eliminarProducto(this.newProducto.id).subscribe();
      this.newProducto = new Producto();
    }
  }

  /**
   * getProducto
   */
 


  public console(any: any) {
    console.log(any);
  }
}
