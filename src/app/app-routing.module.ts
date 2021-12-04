import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarouselComponent } from './components/carousel/carousel.component';
import { NosotrosComponent } from "./components/nosotros/nosotros.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { GaleriaComponent } from "./components/galeria/galeria.component";
import { ReservaComponent } from './components/reserva/reserva.component';
import { LoginComponent } from './components/login/login.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { ArriendoComponent } from './components/arriendo/arriendo.component';
import { VentaComponent } from './components/venta/venta.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';
import { FinanzasComponent } from './components/finanzas/finanzas.component';
import { ReservaFutbolitoComponent } from './components/reserva-futbolito/reserva-futbolito.component';
import { ReservaFutboltenisComponent } from './components/reserva-futboltenis/reserva-futboltenis.component';
import { GuardLoginGuard } from './api/Login/guard-login.guard';
import { ReservaQuinchoComponent } from './components/reserva-quincho/reserva-quincho.component';
import { ReservaFuncionalComponent } from './components/reserva-funcional/reserva-funcional.component';


const routes: Routes = [
  {
    path: 'inicio',
    component: CarouselComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
    path: 'reservas',
    component: ReservaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'menu-principal',
    component: MenuPrincipalComponent,
    canActivate: [GuardLoginGuard]
  },
  {
    path: 'arriendo',
    component: ArriendoComponent,
    canActivate: [GuardLoginGuard]
  },
  {
    path: 'venta',
    component: VentaComponent,
    canActivate: [GuardLoginGuard]
  },
  {
    path: 'inventario',
    component: InventarioComponent,
    canActivate: [GuardLoginGuard]
  },
  {
    path: 'trabajadores',
    component: TrabajadoresComponent,
    canActivate: [GuardLoginGuard]
  },
  {
    path: 'finanzas',
    component: FinanzasComponent,
    canActivate: [GuardLoginGuard]
  },
  {
    path: 'futbolito',
    component: ReservaFutbolitoComponent
  },
  {
    path: 'futbol-tenis',
    component:ReservaFutboltenisComponent
  },
  {
    path: 'quincho',
    component: ReservaQuinchoComponent 
  },
  {
    path: 'funcional',
    component: ReservaFuncionalComponent
  },



  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: "**",
    redirectTo: "/inicio"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
