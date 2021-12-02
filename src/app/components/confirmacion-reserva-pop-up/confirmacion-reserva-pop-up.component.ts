import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmacion-reserva-pop-up',
  templateUrl: './confirmacion-reserva-pop-up.component.html',
  styleUrls: ['./confirmacion-reserva-pop-up.component.less']
})
export class ConfirmacionReservaPopUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
 
}
