import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngxEllipsis'
})
export class NgxEllipsisPipe implements PipeTransform {

  transform(value: string, max: number) {
    if (value.length > max) {
      return value.substring(0, max) + '…';
    }

    return value;
  }

}
