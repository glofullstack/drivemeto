import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
declare var google;
@Component({
  selector: 'places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent {

  @Output() recuperarPlace = new EventEmitter; 
  @Input() inputname:string
  // @Input('name') formControlName:string

  arrMarkers: any[]= []
  directionsService: any
  directionsDisplay: any
  constructor() {
   
   }

  ngAfterViewInit() {
     // restringir los resultados del autocomplete de google a es-españa
     let options = {
      componentRestrictions: {country: "es"}
      }    

    let inputPlace = document.getElementById(this.inputname)
    let autocompleteOrigen = new google.maps.places.Autocomplete(inputPlace, options)
    autocompleteOrigen.setFields(['address_components', 'formatted_address', 'geometry', 'icon', 'name'])
      
    let self = this
    autocompleteOrigen.addListener('place_changed', () => {
      let place = autocompleteOrigen.getPlace()
      let latP = place.geometry.location.lat()
      let lngP = place.geometry.location.lng()

       this.recuperarPlace.emit({ latitud: latP, longitud: lngP, direccion: place.formatted_address, inputname: this.inputname })
    })
 


  }

}
