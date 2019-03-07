import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { validateConfig } from '@angular/router/src/config';
import { TrayectoService } from '../trayecto.service';

declare var google;


@Component({
  selector: 'new-trayecto',
  templateUrl: './new-trayecto.component.html',
  styleUrls: ['./new-trayecto.component.css']
})
export class NewTrayectoComponent implements OnInit {

  formTrayecto; FormGroup;

  fechaActual: Date

  constructor(private serviceTrayecto: TrayectoService) {
    this.fechaActual = new Date();
   }

  ngOnInit() {

// ---------------------------------------------AUTOCOMPLETE DIRECCIONES-------------------

    // restringir los resultados del autocomplete de google a es-españa
    let options = {
      componentRestrictions: {country: "es"}
    }    

    let inputOrigen = document.getElementById('inputPlaceOrigen')
    let autocompleteOrigen = new google.maps.places.Autocomplete(inputOrigen,options)
    autocompleteOrigen.setFields(['address_components', 'geometry', 'icon', 'name'])
      
    let self = this
    autocompleteOrigen.addListener('place_changed', () => {
      let place = autocompleteOrigen.getPlace()
      // let latP = place.geometry.location.lat()
      // let lngP = place.geometry.location.lng()
      console.log(place)
    })

    let inputDestino = document.getElementById('inputPlaceDestino')
    let autocompleteDestino = new google.maps.places.Autocomplete(inputDestino,options)
    autocompleteDestino.setFields(['address_components', 'geometry', 'icon', 'name'])


// VALIDACION FORMULARIO-----------------------------------------------------------------
    this.formTrayecto = new FormGroup({
      origenTrayecto: new FormControl('', [Validators.required]),
      destinoTrayecto: new FormControl('', [Validators.required]),
      fechaTrayecto: new FormControl('',  [Validators.required]),
      horaTrayecto: new FormControl('10',  [Validators.required]),
      minutosTrayecto: new FormControl('00',  [Validators.required]),
      tipoTrayecto: new FormControl('habitual',  [Validators.required])
    })

  }





  manejarFomuTrayecto(){
    // console.log(this.formTrayecto.value)
    this.serviceTrayecto.newTrayecto(this.formTrayecto.value).subscribe(res=>{
      console.log(res)
    })
  }
}
