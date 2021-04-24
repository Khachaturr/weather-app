import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iIcon',
  pure: false
})
export class IIconPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {

    return  `http://openweathermap.org/img/wn/${value}@2x.png`
  }

}
