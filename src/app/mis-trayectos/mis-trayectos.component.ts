import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mis-trayectos',
  templateUrl: './mis-trayectos.component.html',
  styleUrls: ['./mis-trayectos.component.css']
})
export class MisTrayectosComponent implements OnInit {

  @Input() mistrayectos: any[]

  constructor() { }

  ngOnInit() {
  }
  
}
