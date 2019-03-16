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
  // contiene los usuarios apuntados a un trayecto
  usuariosTrayecto:any

  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceTrayecto: TrayectoService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.serviceTrayecto.getTrayectoById(params.idTrayecto).subscribe(res => {
        this.trayecto = res
        this.usuariosTrayecto=this.trayecto.usuarios
        console.log(res)
        // se lanza el mapa
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

  }

// si e
creadorTrayecto(){
  for(let i; i<this.usuariosTrayecto.length; i++){
    if(this.trayecto.fkusuario==this.usuariosTrayecto[i].id){
      console.log(this.usuariosTrayecto[i].id)
      return false
    }else{
      console.log(this.usuariosTrayecto[i].id)

      return true
    }
  }
}

// crea el mapa
  loadMap() {
    this.directionsService = new google.maps.DirectionsService()
    this.directionsDisplay = new google.maps.DirectionsRenderer()
// parametros del mapa
    let propsMap = {
      center: new google.maps.LatLng(40,-3),
      zoom: 2,
      mapTypeId: google.maps.MapTypeId.ROADS,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(this.gMap.nativeElement, propsMap)
    this.directionsDisplay.setMap(this.map)

    this.generateRoute(
      new google.maps.LatLng(this.trayecto.latitudOrigen, this.trayecto.longitudOrigen),
      new google.maps.LatLng(this.trayecto.latitudDestino, this.trayecto.longitudDestino))
 }

  generateRoute(start, end) {
    let requestOpts = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode['DRIVING']
    }
    let self = this
    this.directionsService.route(requestOpts, (results) => {
      self.directionsDisplay.setDirections(results)
    })
  }

  handlerJoin(){
    this.serviceTrayecto.joinTrayecto(JSON.parse(localStorage.getItem('token')), this.trayecto.id).subscribe(res=>{
        console.log(res)
    })
  }





}
