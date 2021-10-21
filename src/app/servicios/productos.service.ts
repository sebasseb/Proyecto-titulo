import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Producto } from '../class/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  URL: any = "/canchaseb/src/app/api/Productos/";

  constructor(private http: HttpClient) { }
  
  obtenerProductos():Observable<any> {
    return this.http.get(`${this.URL}obtenerProductos.php`);
  }
  agregarProducto(producto: Producto) {
    
    return this.http.post(`${this.URL}agregarProducto.php`, JSON.stringify(producto));
  }

  eliminarProducto(id: number) {
    return this.http.get(`${this.URL}eliminarProducto.php?id=${id}`);
  }


  buscarProducto(rut: string) {
    return this.http.get(`${this.URL}buscarProducto.php?rut=${rut}`);
  }

  editarProducto(producto: Producto) {
    return this.http.post(`${this.URL}editarProductos.php`, JSON.stringify(producto));
  }
}