import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/class/producto';
import { ProductosService } from "src/app/servicios/productos.service";
import { Orden } from '../../class/orden';


@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.less']
})
export class VentaComponent implements OnInit {
  ArrayProductos: Array<Producto>;
  ArrayCarrito: Array<Producto>;
  newProducto: Producto;


  total: number = 0;


  sortBy!: string;
  searchInput: any;



  showVar: boolean = true;


  constructor(private productosServicio: ProductosService) {
    this.ArrayProductos = [];
    this.ArrayCarrito = [];
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

  addToCart() {

    const cartProducto: Producto = {
      id: this.newProducto.id,
      nombre: this.newProducto.nombre,
      proveedor: this.newProducto.proveedor,
      valorProducto: this.newProducto.valorProducto,
      stock: 1
    }

    var stockActual: number;

    for (let i = 0; i < this.ArrayProductos.length; i++) {
      if (this.ArrayProductos[i].nombre == cartProducto.nombre) {
        stockActual = this.ArrayProductos[i].stock;
        console.log(stockActual);
        if (stockActual > 0) {
          this.ArrayCarrito.push(cartProducto);
          this.total = this.total + cartProducto.stock * cartProducto.valorProducto;
        }
      }
    }





 





  }

  add(id: number) {

    for (let i = 0; i < this.ArrayCarrito.length; i++) {
      if (this.ArrayCarrito[i].id == id) {

        this.ArrayCarrito[i].stock++;
        this.total = +this.total + +this.ArrayCarrito[i].valorProducto;
        console.log(this.total);



      }
    }





  }

  minus(id: number) {
    for (let i = 0; i < this.ArrayCarrito.length; i++) {
      if (this.ArrayCarrito[i].id == id) {
        if (this.ArrayCarrito[i].stock > 0) {
          this.ArrayCarrito[i].stock--;
          this.total = +this.total - +this.ArrayCarrito[i].valorProducto;
          console.log(this.total);
        }
      }

    }
  }

  pop(id: number) {
    for (let i = 0; i < this.ArrayCarrito.length; i++) {
      if (this.ArrayCarrito[i].id == id) {
        this.total = +this.total - +this.ArrayCarrito[i].valorProducto * +this.ArrayCarrito[i].stock;
        this.ArrayCarrito = this.ArrayCarrito.filter(elem => elem != this.ArrayCarrito[i]);

      }
    }
  }


  vender() {
    const orden: Orden = {
      fecha: new Date(),
      total: this.total
    }

    console.log(orden);

    this.productosServicio.vender(orden).subscribe(
      (res) => {


        for (let i = 0; i < this.ArrayCarrito.length; i++) {
          var stockActual: number;
          for (let j = 0; j < this.ArrayProductos.length; j++) {
            if (this.ArrayProductos[j].nombre == this.ArrayCarrito[i].nombre) {
              stockActual = this.ArrayProductos[j].stock;
              const restaStock = {
                nombre: this.ArrayCarrito[i].nombre,
                cant: stockActual - this.ArrayCarrito[i].stock
              }
              console.log(restaStock);
              this.productosServicio.restarStock(restaStock).subscribe(
                (res) => {
                  console.log(res);

                }
              );
            }
          }






        }
        this.toggleChild();
      }
    )



  }
  toggleChild() {
    this.showVar = !this.showVar;
  }

  public obtenerProductos() {
    this.productosServicio.obtenerProductos().subscribe(
      (res: any) => {
        this.ArrayProductos = res;




      })
  }


  public openForEdit(producto: Producto) {
    this.newProducto = producto;
  }
}
