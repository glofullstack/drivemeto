import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BuscarTrayectoComponent } from './buscar-trayecto/buscar-trayecto.component';
import { PublicarTrayectoComponent } from './publicar-trayecto/publicar-trayecto.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'home', component: HomeComponent},
  {path:'search', component: BuscarTrayectoComponent},
  {path:'publicar', component: PublicarTrayectoComponent},
  {path:'login', component: LoginComponent},
  {path:'perfil', component: PerfilComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
