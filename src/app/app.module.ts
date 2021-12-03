import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { ArriendoComponent } from './components/arriendo/arriendo.component';
import { VentaComponent } from './components/venta/venta.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';
import { FinanzasComponent } from './components/finanzas/finanzas.component';
import { ReservaFutbolitoComponent } from './components/reserva-futbolito/reserva-futbolito.component';

import { TrabajadoresService } from './servicios/trabajadores.service';
import { ProductosService } from './servicios/productos.service';
import { ReservasService } from './servicios/reservas.service';
import { AuthService } from './servicios/auth.service';
import { AuthInterceptorService } from './servicios/auth-interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { ReservaFutboltenisComponent } from './components/reserva-futboltenis/reserva-futboltenis.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { ReservaPopUpComponent } from './components/reserva-pop-up/reserva-pop-up.component';
import { ConfirmacionReservaPopUpComponent } from './components/confirmacion-reserva-pop-up/confirmacion-reserva-pop-up.component';
import {FuttenisDatePickerComponent } from './components/futtenis-date-picker/futtenis-date-picker.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactoComponent,
    GaleriaComponent,
    ReservaComponent,
    FooterComponent,
    LoginComponent,
    MenuPrincipalComponent,
    ArriendoComponent,
    VentaComponent,
    InventarioComponent,
    AgendaComponent,
    TrabajadoresComponent,
    FinanzasComponent,
    ReservaFutbolitoComponent,
    ReservaFutboltenisComponent,
    DatePickerComponent,
    ReservaPopUpComponent,
    ConfirmacionReservaPopUpComponent,
    FuttenisDatePickerComponent



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgbModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,
    NgbPaginationModule,
    NgbAlertModule

  ],
  providers: [
    ProductosService,
    TrabajadoresService,
    ReservasService,
    AuthService,
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    DatePickerComponent


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
