import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api.service';
import { LoginI } from "../../modelos/login.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  onlogin(form: LoginI) {
    this.api.loginByUser(form).subscribe(data => {
      console.log(data);
    })
  }

}
