import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-venta-pop-up',
  templateUrl: './venta-pop-up.component.html',
  styleUrls: ['./venta-pop-up.component.less']
})
export class VentaPopUpComponent implements OnInit {
   @Input() showMePartially!: boolean;
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
    window.location.reload();
  }
 

}
