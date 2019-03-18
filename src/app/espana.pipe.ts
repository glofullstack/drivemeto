import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espana'
})
export class EspanaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // let direccioncompleta = value.split(' ')   
    // let direccionsin = direccioncompleta.map(item=> this.capitalizeWord(item))
    // return direccionsin.join(' ');
    
  }


}
