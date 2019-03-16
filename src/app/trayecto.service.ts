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
    this.urlTrayecto = 'http://localhost:3000/api/trayectos'

  }

  filtrarTrayecto(origen,destino){
    console.log(origen)//de momento solo saca el origen y destino de BUSCAR TRAYECTO
    return this.httpClient.post<any[]>(`${this.urlTrayecto}/buscar`,{
      'latitudOrigen': origen.latitud,
      'longitudOrigen': origen.longitud,
      'latitudDestino': destino.latitud,
      'longitudDestino': destino.longitud,

    })
  }


  newTrayecto(trayecto){
    console.log(trayecto.origenTrayecto)
     return this.httpClient.post<any[]>(`${this.urlTrayecto}/newtrayecto`, {
      'origenTrayecto': trayecto.origenTrayecto,
      'latitudOrigen': trayecto.latitudOrigen,
      'longitudOrigen': trayecto.longitudOrigen,
      'destinoTrayecto': trayecto.destinoTrayecto,
      'latitudDestino': trayecto.latitudDestino,
      'longitudDestino': trayecto.longitudDestino,
      'fechaTrayecto': trayecto.fechaTrayecto,
      'horaTrayecto': trayecto.horaTrayecto,
      'minutosTrayecto': trayecto.minutosTrayecto,
      'tipoTrayecto': trayecto.tipoTrayecto,
      'token': trayecto.tokenUsuario,
    })

  }



  getTrayectoById(idTrayecto){
    return this.httpClient.post<any[]>(`${this.urlTrayecto}/trayecto`, {
      'id':idTrayecto
    })
  }


  joinTrayecto(token, id){
    return this.httpClient.post<any[]>(`${this.urlTrayecto}/join`, {
      'token':token,
      'id':id
    })
  }


}
