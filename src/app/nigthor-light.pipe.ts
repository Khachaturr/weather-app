import { WeatherBasic } from './models/weather';
import { Pipe, PipeTransform } from '@angular/core';
import { WeaterService } from './weater.service';

@Pipe({
  name: 'nigthorLight',
  pure: false
})
export class NightorLightPipe implements PipeTransform {
  constructor(private weaterService: WeaterService) { }

  transform(value: WeatherBasic): boolean {
    let naitorLith = value.weather[0].icon.slice(2)
    return naitorLith !== "d";
  }

}
