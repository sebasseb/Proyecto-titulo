import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-funcional',
  templateUrl: './reserva-funcional.component.html',
  styleUrls: ['./reserva-funcional.component.less']
})
export class ReservaFuncionalComponent implements OnInit {
  reserva: string;
  constructor() { 
    this.reserva = 'funcional';
  }

  ngOnInit(): void {
  }

}
