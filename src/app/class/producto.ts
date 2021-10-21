export class Producto {
  id: number;
  stock!: number;
  id_proveedor!: number;
  nombre!: string;
  valorProducto!: number;

  constructor() {
    this.id = 0;
    
  }
}
