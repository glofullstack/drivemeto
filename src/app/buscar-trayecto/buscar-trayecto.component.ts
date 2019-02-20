import { Component, OnInit } from '@angular/core';
import { TrayectoService } from '../trayecto.service';
import { Trayecto } from '.././models/trayecto.model';



@Component({
  selector: 'buscar-trayecto',
  templateUrl: './buscar-trayecto.component.html',
  styleUrls: ['./buscar-trayecto.component.css']
})
export class BuscarTrayectoComponent implements OnInit {

    trayecto: Trayecto;
  constructor(private serviceTrayecto: TrayectoService) {
    this.trayecto = new Trayecto("","");

   }

  ngOnInit() {
  }

  handlerBuscarTrayecto(){
    this.serviceTrayecto.filtrarTrayecto(this.trayecto)
  }
}
