export class Producto {
  idProducto: number;
  cantProducto: number;
  idProveedor: number;
  nombreProducto: string;
  valorProducto: number;

  constructor() {
    this.idProducto = 1;
    this.cantProducto = 1;
    this.idProveedor = 1;
    this.nombreProducto = 'primero';
    this.valorProducto = 1  ;
  }

  /**
   * getIdProducto 
  return this.idProducto;*/
  /**
   * setIdProducto
  */
  public getIdProducto() { return this.idProducto; }
  public setIdProducto(id: number) { this.idProducto = id; }

  /**
   * getCantProducto
   */
  /**
   * setCantProducto
   */
  public getCantProducto() { return this.cantProducto; }
  public setCantProducto(cant: number) { this.cantProducto = cant; }

  /**
   * getIdProveedor
  *//**
   * setIdProveedor
   */
  public getIdProveedor() { return this.idProveedor; }
  public setIdProveedor(id: number) { this.idProveedor = id; }


  /**
   * getNombreProducto
   
  return this.nombreProducto*/
  /**
 * setNombreProducto
nombre : string   */
  public getNombreProducto() { return this.nombreProducto; }
  public setNombreProducto(nombre: string) { this.nombreProducto = nombre; }


  /**
   * getValorProducto
   */
  /**
 * setValorProducto
 */
  public getValorProducto() { return this.valorProducto; }
  public setValorProducto(valor: number) { this.valorProducto = valor }
}

