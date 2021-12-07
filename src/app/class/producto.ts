export class Producto {
  id: number;
  stock!: number;
  proveedor!: string;
  nombre!: string;
  valorProducto!: number;

  constructor() {
    this.id = 0;
    
  }
}
