import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BuscarTrayectoComponent } from './buscar-trayecto/buscar-trayecto.component';
// import { PublicarTrayectoComponent } from './publicar-trayecto/publicar-trayecto.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NewTrayectoComponent } from './new-trayecto/new-trayecto.component';
import { RutasActivasGuard } from './rutas-activas.guard';
import { EntraComponent } from './entra/entra.component';
import { TrayectoComponent } from './trayecto/trayecto.component';
import { MisTrayectosComponent } from './mis-trayectos/mis-trayectos.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'home', component: HomeComponent},
  {path:'search', component: BuscarTrayectoComponent},
  {path:'publicar', component: NewTrayectoComponent, canActivate:[RutasActivasGuard]},
  {path:'login', component: LoginComponent},
  {path:'entra', component: EntraComponent},
  {path:'perfil', component: PerfilComponent, canActivate:[RutasActivasGuard]},
  {path:'trayecto/:idTrayecto', component: TrayectoComponent},
  // {path:'mistrayectos', component: MisTrayectosComponent, canActivate:[RutasActivasGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
