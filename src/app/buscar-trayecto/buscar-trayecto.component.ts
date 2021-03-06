import { Component, OnInit } from '@angular/core';
import { TrayectoService } from '../trayecto.service';
import { Trayecto } from '.././models/trayecto.model';
import { Router } from '@angular/router';

// declare var google;
declare var $

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

  constructor(private serviceTrayecto: TrayectoService,
    private router: Router) {
      this.listaTrayectos=[]
   }

  ngOnInit() {

  }
 
  getPlace(event){
    if(event.inputname=="origen"){
        this.origenTrayecto=event
    }else{
        this.destinoTrayecto=event
    }
  }

  handlerBuscar(){
    this.serviceTrayecto.filtrarTrayecto(this.origenTrayecto, this.destinoTrayecto).subscribe(res=>{
      this.listaTrayectos = res;
      this.lanzarMensajeError()
    })
  } 

  lanzarMensajeError(){
    if(this.listaTrayectos.length==0){
      console.log("No hay trayectos")
      $('#trayectoModal').modal({
        show: true
      })
    }
  }
  cerrarModal(){
    $('#trayectoModal').modal('hide')
  }
  
}
