export class Trabajador {
  id!: number;
  rut!: string;
  passwd!: string;
  nombre!: string;
  direccion!: string;
  fono!: number;
  salario!: number;
  isAdmin!: boolean ;

  constructor() {
    this.id = 0;
    this.salario = 0;
    this.isAdmin = false;
  }
  
}
