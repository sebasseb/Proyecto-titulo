export class Trabajador {
  id!: number;
  rut!: string;
  passwd!: string;
  nombre!: string;
  direccion!: string;
  fono!: number;
  salario!: number;
  isAdmin: boolean = false;

  constructor() {
    this.id = 0;
 
    
  }
  
}
