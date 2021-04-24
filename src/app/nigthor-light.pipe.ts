import { Pipe, PipeTransform } from '@angular/core';
import { WeaterService } from './weater.service';

@Pipe({
  name: 'nigthorLight',
  pure: false
})
export class NightorLightPipe implements PipeTransform {
  constructor(private weaterService: WeaterService) { }

  transform(value: boolean, date: any): boolean {
    let naitorLith = date.weather[0].icon.slice(2)
    // console.log(naitorLith)
    if (naitorLith === "d") {
      return false
    }
    else {
      return true
    }


  }

}
