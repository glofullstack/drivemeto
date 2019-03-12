import { Component, OnInit, Input, ViewChild } from '@angular/core';
declare var google
@Component({
  selector: 'detalle-trayecto',
  templateUrl: './detalle-trayecto.component.html',
  styleUrls: ['./detalle-trayecto.component.css']
})
export class DetalleTrayectoComponent implements OnInit {

  @Input() trayecto: any

  constructor() { }
  @ViewChild('googleMap') gMap: any

  

  ngOnInit() {
   
  }
}