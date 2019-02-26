import { Injectable } from '@angular/core';
import { Trayecto } from './models/trayecto.model';


@Injectable({
  providedIn: 'root'
})
export class TrayectoService {
  arrTrayecto: Trayecto[]
  
  constructor() { 
    this.arrTrayecto = []
  }

  filtrarTrayecto(trayecto){
    console.log(trayecto)//de momento solo saca el origen y destino de BUSCAR TRAYECTO
  }

  newTrayecto(trayecto){
    console.log(trayecto)//de momento saca los valores de new treycto /publicar trayecto
  }


}
