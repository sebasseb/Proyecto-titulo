import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../class/reserva';

@Component({
  selector: 'app-arriendo',
  templateUrl: './arriendo.component.html',
  styleUrls: ['./arriendo.component.less']
})
export class ArriendoComponent implements OnInit {
  reservas: Reserva[] = [
    { id: 1, rutCliente: '123456789', nombreEspacio: 'Cancha 1', horaReserva: 1730 },
    { id: 2, rutCliente: '987654321', nombreEspacio: 'Cancha 2', horaReserva: 1830 },
    { id: 3, rutCliente: '132436475', nombreEspacio: 'Cancha 3', horaReserva: 1930 }

  
  
  ];

  constructor() {

  }

  ngOnInit(): void {
  }

}
