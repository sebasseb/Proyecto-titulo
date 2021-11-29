

export class Reserva {
  id!: number;
  nombreCliente!: string;
  rutCliente!: string;
  reserva!: string;
  hora!: number;
  dia!: number;
  mes!: number;
  ano!: number;
  telefono!: number;


  datetime = new Date;


  constructor() {
    this.id = 0;
    
    
  }


}

