import { Injectable } from '@angular/core';
import { Trayecto } from './models/trayecto.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TrayectoService {
  arrTrayecto: Trayecto[]
  urlTrayecto: String


  constructor(private httpClient: HttpClient) { 
    this.arrTrayecto = []
    this.urlTrayecto = 'http://localhost:3000/api/usuarios'

  }

  filtrarTrayecto(trayecto){
    console.log(trayecto)//de momento solo saca el origen y destino de BUSCAR TRAYECTO
  }


  newTrayecto(trayecto){
    console.log(trayecto.origen)
    return this.httpClient.post<any[]>(`${this.urlTrayecto}/create`, {
      'origenTrayecto': trayecto.origenTrayecto,
      'latOrigen': trayecto.latOrigen,
      'longOrigen': trayecto.longOrigen,
      'destinoTrayecto': trayecto.destinoTrayecto,
      'latDestino': trayecto.latDestino,
      'longDestino': trayecto.longDestino,
      'fechaTrayecto': trayecto.fechaTrayecto,
      'horaTrayecto': trayecto.horaTrayecto,
      'minutosTrayecto': trayecto.minutosTrayecto,
      'tipoTrayecto': trayecto.tipoTrayecto,

    })
  }




}
