import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'lista-trayecto',
  templateUrl: './lista-trayecto.component.html',
  styleUrls: ['./lista-trayecto.component.css']
})
export class ListaTrayectoComponent implements OnInit {

  @Input() trayectos:any[]
  constructor() { }
  


  ngOnInit() {
    
  }


}
