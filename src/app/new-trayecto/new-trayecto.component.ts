import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import { TrayectoService } from '../trayecto.service';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';

import { formControlBinding } from '@angular/forms/src/directives/ng_model';

declare var google;


@Component({
  selector: 'new-trayecto',
  templateUrl: './new-trayecto.component.html',
  styleUrls: ['./new-trayecto.component.css']
})
export class NewTrayectoComponent implements OnInit {
  // formControlName:string
  inputname:string
  formTrayecto; FormGroup;
  fechaActual: Date

  origenTrayecto: any
  destinoTrayecto: any


  constructor(private serviceTrayecto: TrayectoService) {
    this.fechaActual = new Date();
   }

  ngOnInit() {
// VALIDACION FORMULARIO-----------------------------------------------------------------
    this.formTrayecto = new FormGroup({
      origenTrayecto: new FormControl(''),
      latitudOrigen:new FormControl(''),
      longitudOrigen: new FormControl(''),
      destinoTrayecto: new FormControl(''),
      latitudDestino:new FormControl(''),
      longitudDestino:new FormControl(''),
      fechaTrayecto: new FormControl('',  [Validators.required]),
      horaTrayecto: new FormControl('',  [Validators.required]),
      minutosTrayecto: new FormControl('',  [Validators.required]),
      tipoTrayecto: new FormControl('habitual',  [Validators.required]),
      tokenUsuario: new FormControl(''),
    }, [this.validatedTrayectos.bind(this)]

    )

  }



  getPlace(event){
    if(event.inputname=="origenTrayecto"){
        this.origenTrayecto=event
    }else{
        this.destinoTrayecto=event
    }
    // console.log(this.destinoTrayecto.direccion)

  }


  validatedTrayectos(control){
    if(this.origenTrayecto==null || this.destinoTrayecto==null){
      return {error: 'tienes que introducir una direccion'}
    }else{
      return null
    }
    
  }

  manejarFomuTrayecto(){
// hay que completar los datos del formulario con los que obtenemos del outup del places

  this.formTrayecto.value.origenTrayecto = this.origenTrayecto.direccion
  this.formTrayecto.value.latitudOrigen = this.origenTrayecto.latitud
  this.formTrayecto.value.longitudOrigen = this.origenTrayecto.longitud

  this.formTrayecto.value.destinoTrayecto = this.destinoTrayecto.direccion
  this.formTrayecto.value.latitudDestino = this.destinoTrayecto.latitud
  this.formTrayecto.value.longitudDestino = this.destinoTrayecto.longitud
  
  this.formTrayecto.value.tokenUsuario = JSON.parse(localStorage.getItem('token'))

// pasamos todos los datos del formulario con los extraidos del getplaces al servicio
  this.serviceTrayecto.newTrayecto(this.formTrayecto.value).subscribe(res=>{
       console.log(res)
   })
  }
}
