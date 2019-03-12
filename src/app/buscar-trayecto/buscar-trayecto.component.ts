import { Component, OnInit } from '@angular/core';
import { TrayectoService } from '../trayecto.service';
import { Trayecto } from '.././models/trayecto.model';

// declare var google;

@Component({
  selector: 'buscar-trayecto',
  templateUrl: './buscar-trayecto.component.html',
  styleUrls: ['./buscar-trayecto.component.css']
})
export class BuscarTrayectoComponent implements OnInit {

  map: any
  inputname: string
  origenTrayecto: any
  destinoTrayecto: any

  listaTrayectos: any[];

  constructor(private serviceTrayecto: TrayectoService) {

   }

  ngOnInit() {

  }
 
  getPlace(event){
    if(event.inputname=="origenTrayecto"){
        this.origenTrayecto=event
    }else{
        this.destinoTrayecto=event
    }
    this.serviceTrayecto.filtrarTrayecto(this.origenTrayecto).subscribe(res=>{
      this.listaTrayectos = res;
    })

  }

 
}
