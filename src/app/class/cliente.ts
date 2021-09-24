import { ReservaComponent } from '../components/reserva/reserva.component';
import { Reserva } from './reserva';

export class Cliente {
  rutCliente!: string;
  nombreCliente!: string;
  fonoCliente!: number;
  isEstudiante;
  ArrayReservas = Array<Reserva>();


  constructor() {
    this.isEstudiante = false;
    this.ArrayReservas = [];
  }

  public addOrEditReserva() {
    var newReserva = new Reserva();
    if (newReserva.id === 0) {
      newReserva.id = this.ArrayReservas.length + 1;
      this.ArrayReservas.push(newReserva);

    }
    newReserva = new Reserva();
    console.log(this.ArrayReservas)
  }

}
