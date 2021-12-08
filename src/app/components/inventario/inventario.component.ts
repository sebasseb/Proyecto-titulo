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
  sortBy!: string;
  searchInput: any;
  

  




  constructor(private productosServicio: ProductosService) {
    this.ArrayProductos = [];
    this.newProducto = new Producto();

  }
  

  ngOnInit(): void {
    this.obtenerProductos();
  }

  SortBy(sortBy: string) {
    this.sortBy = sortBy;
  }
  searchBy() {
    const searchConfig = {
      sortBy: this.sortBy,
      searchInput: this.searchInput
    }
    try {
      this.productosServicio.searchBy(searchConfig).subscribe(
      (res: any) => {

        console.log(res);
        var json = JSON.stringify(res);
        this.ArrayProductos = JSON.parse(json);
        console.log(this.ArrayProductos);
        
          //console.log(res);
          
      }
    )
    } catch (e: any) {
      this.ArrayProductos = new Array;
    }
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

    window.location.reload();
    
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
      window.location.reload();
    }
  }

  /**
   * getProducto
   */
 


  public console(any: any) {
    console.log(any);
  }
}
