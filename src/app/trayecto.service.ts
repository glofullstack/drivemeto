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
    console.log(trayecto)
  }


}
