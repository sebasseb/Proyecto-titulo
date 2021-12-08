import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Producto } from '../class/producto';
import { Orden } from '../class/orden';

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
  searchBy(objeto : any) {
    return this.http.post(`${this.URL}searchBy.php`, JSON.stringify(objeto));
  }

  vender(orden: Orden) {
    return this.http.post(`/canchaseb/src/app/api/Venta/venta.php`, JSON.stringify(orden))
  }

  restarStock(data: any) {
    return this.http.post(`/canchaseb/src/app/api/Venta/restarStock.php`, JSON.stringify(data))
  }

  xls() {
    return this.http.get(`/canchaseb/src/app/api/Venta/excel.php`);
  }
}