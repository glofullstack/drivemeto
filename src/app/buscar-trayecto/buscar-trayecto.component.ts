import { Component, OnInit } from '@angular/core';
import { TrayectoService } from '../trayecto.service';
import { Trayecto } from '.././models/trayecto.model';

declare var google;

@Component({
  selector: 'buscar-trayecto',
  templateUrl: './buscar-trayecto.component.html',
  styleUrls: ['./buscar-trayecto.component.css']
})
export class BuscarTrayectoComponent implements OnInit {

  trayecto: Trayecto;

  map: any
  arrMarkers: any[]= []
  directionsService: any
  directionsDisplay: any

  constructor(private serviceTrayecto: TrayectoService) {
    this.trayecto = new Trayecto("","","","","","");
   }

  ngOnInit() {


    let options = {
      componentRestrictions: {country: "es"}
     }  

    let inputOrigen = document.getElementById('inputPlaceOrigen')
    let autocompleteOrigen = new google.maps.places.Autocomplete(inputOrigen,options)
    autocompleteOrigen.setFields(['address_components'])
      
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



  }

  handlerBuscarTrayecto(formValue){
    this.serviceTrayecto.filtrarTrayecto(formValue)
  }
}
