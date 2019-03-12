import { Component, OnInit, ViewChild } from '@angular/core';
import { TrayectoService } from '../trayecto.service';
import { ActivatedRoute } from '@angular/router';
declare var google
@Component({
  selector: 'trayecto',
  templateUrl: './trayecto.component.html',
  styleUrls: ['./trayecto.component.css']
})
export class TrayectoComponent implements OnInit {

  trayecto: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicioTrayecto: TrayectoService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.servicioTrayecto.getTrayectoById(params.idTrayecto).subscribe(res => {
        this.trayecto = res
        console.log(this.trayecto)
        this.loadMap()
      })

    })

  }

  @ViewChild('googleMap') gMap: any
  map: any

  arrMarkers: any[] = []
  directionsService: any
  directionsDisplay: any

  ngOnInit() {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(this.showPosition.bind(this), this.showError)
    // } else {
    //   console.log('se ha liado parda')
    // }
  }

  // showPosition(position) {
  //   // console.log(position)
  //   this.loadMap()
  // }

  //para definir un mapa nacesiamos: centro del mapa, zoom, tipo de mapa(satelite, terrain, roadmap, hybrid)
  loadMap() {
    let centroMapa= this.trayecto.origenTrayecto
    
    this.directionsService = new google.maps.DirectionsService()
    this.directionsDisplay = new google.maps.DirectionsRenderer()

    let propsMap = {
      center: new google.maps.LatLng(centroMapa.coords.latitude, centroMapa.coords.longitude),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADS,
    }

    this.map = new google.maps.Map(this.gMap.nativeElement, propsMap)

    this.directionsDisplay.setMap(this.map)

    // crear marcador una vez este creado el mapa
    let marker = new google.maps.Marker({
      position: propsMap.center,
      // map:this.map,//actua sobre este mapa se puede cambiar por la linea: marker.setMap(this.map)
      title: 'Estamos Aquí',
    })
    marker.setMap(this.map)

    // let self =  this
    //   self.generateRoute(new google.maps.LatLng(position.coords.latitude, position.coords.longitude), place.geometry.location)
    

  }


  // -----------------------------------------------------RUTAS DE UN PUTO A OTRO
  // intalar npm i @types/googlemaps 
  generateRoute() {
    // let start = 'calle cadarso 8 madrid, es'
    // let end = 'plaza de españa 11 madrid, es'
    let start = this.trayecto.origenTrayecto
    let end = this.trayecto.destinoTrayecto

    let requestOpts = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode['DRIVING']
    }

    let self = this
    // DIRECTIONS SERVICE 
    this.directionsService.route(requestOpts, (results) => {
      self.directionsDisplay.setDirections(results)
      // console.log(results.routes[0].legs)-->datos de la ruta (km, tiempo,stesp etc)
    })
  }



  Deletemarkes() {
    this.arrMarkers.forEach(item => item.setMap(null))
  }


  showError(error) {
    // console.log(error.code)
    // diferentes tipos de error
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log('El usuario no quiere ser geolocalizado')
        break
      case error.POSITION_UNAVAILABLE:
        console.log('No se ha podido recuperar la posicion')
        break
      case error.TIMEOUT:
        console.log('Se ha tardado demasiado tiempo en recuperar la geolocalizacion')
        break
      case error.UNKNOWN_ERROR:
        console.log('ERROR DESCONOCIDO')
        break
    }
  }


}
