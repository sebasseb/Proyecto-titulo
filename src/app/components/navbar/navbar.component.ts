import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  flag: boolean;
  constructor(private cookieService: CookieService) {
    this.flag = false;
  }

  ngOnInit(): void {

    if (this.cookieService) {
      this.flag = !this.flag;
    } else {
      this.flag = false;
    }

  }

}
