import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  timeToString(number: number) {
    const value = Math.floor(number)
    return value > 9 ? value.toString() : `0${value}`
  }

  transform(value: number, args?: any): string {
    const hours = this.timeToString(value / 3600);
    const minutes = this.timeToString(value / 60);
    const seconds = this.timeToString(value % 60);
    return `${hours}:${minutes}:${seconds}`;
  }

}
