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
    if (this.newProducto.id === 0) {

      this.newProducto.id = this.ArrayProductos.length + 1;
      
      this.productosServicio.agregarProducto(this.newProducto).subscribe(
        datos => {
          if (datos === null) {
            this.ArrayProductos.push(this.newProducto);
          } else {
            console.log('no se agrego');
            
          }
        }
      )

      this.obtenerProductos();

      

    }

    if (this.newProducto.id > 0) {
      
      this.productosServicio.editarProducto(this.newProducto).subscribe();
      
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
