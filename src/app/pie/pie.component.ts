import { Component, OnInit } from '@angular/core';
declare var $

@Component({
  selector: 'pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

//  pieWorks(){
//   $('.contenedor').hover(
//       $(this).find('.info').stop(true, true).animate({ 'left': '0px' }),
//       $(this).find('.info').stop(true, true).animate({ 'left': '400px' })
//     )
// }




}
