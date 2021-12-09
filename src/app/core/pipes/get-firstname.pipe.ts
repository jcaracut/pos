import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFirstname'
})
export class GetFirstnamePipe implements PipeTransform {

  transform(value: string) {
    return value.split(' ')[0];
  }

}
