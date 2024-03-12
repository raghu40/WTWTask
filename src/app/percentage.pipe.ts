import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(value: number, decimalPlaces: number = 1): string {
    if (isNaN(value)) {
      return '';
    }
    const truncatedValue = Math.floor(value * 10) / 10;
    return truncatedValue.toFixed(decimalPlaces) + '%';
  }

}
