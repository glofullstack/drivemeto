import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { HomeComponent } from './home/home.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { environment } from 'src/environments/environment';


import { BuscarTrayectoComponent } from './buscar-trayecto/buscar-trayecto.component';
import { PublicarTrayectoComponent } from './publicar-trayecto/publicar-trayecto.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NewTrayectoComponent } from './new-trayecto/new-trayecto.component';
import { EntraComponent } from './entra/entra.component';
import { PlacesComponent } from './places/places.component';
import { ListaTrayectoComponent } from './lista-trayecto/lista-trayecto.component';
import { DetalleTrayectoComponent } from './detalle-trayecto/detalle-trayecto.component';
import { TrayectoComponent } from './trayecto/trayecto.component';
import { MisTrayectosComponent } from './mis-trayectos/mis-trayectos.component';
import { EspanaPipe } from './espana.pipe';


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

    PerfilComponent,

    NewTrayectoComponent,

    EntraComponent,

    PlacesComponent,

    ListaTrayectoComponent,

    DetalleTrayectoComponent,

    TrayectoComponent,

    MisTrayectosComponent,

    EspanaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
