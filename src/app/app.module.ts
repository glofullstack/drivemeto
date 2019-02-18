import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { HomeComponent } from './home/home.component';

import { BuscarTrayectoComponent } from './buscar-trayecto/buscar-trayecto.component';
import { PublicarTrayectoComponent } from './publicar-trayecto/publicar-trayecto.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CabeceraComponent,
    PieComponent,
    HomeComponent,
    
    BuscarTrayectoComponent,
    
    PublicarTrayectoComponent,
    
    LoginComponent,
    
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
