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
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { ArriendoComponent } from './components/arriendo/arriendo.component';
import { VentaComponent } from './components/venta/venta.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { AgendaComponent } from './components/agenda/agenda.component';



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
    AgendaComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
