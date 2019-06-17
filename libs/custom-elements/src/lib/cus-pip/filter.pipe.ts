import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term, name): any {
    return term
      ? items.filter(
          item => item[name].toLowerCase().indexOf(term.toLowerCase()) !== -1
        )
      : items;
  }
}
