import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-reserva-pop-up',
  templateUrl: './reserva-pop-up.component.html',
  styleUrls: ['./reserva-pop-up.component.less']
})
export class ReservaPopUpComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {
    this.openPopup();
  }
  
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
 
}
