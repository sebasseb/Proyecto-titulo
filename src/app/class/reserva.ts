
export class Reserva {
  id!: number;
  rutCliente!: string;
  nombreEspacio!: string;
  horaReserva!: number;

  constructor() {
    this.id = -1;
    this.rutCliente = "null";
    this.nombreEspacio = "null";
    this.horaReserva = -1;
  }


}

