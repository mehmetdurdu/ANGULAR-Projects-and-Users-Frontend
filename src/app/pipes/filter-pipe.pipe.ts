import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(value: Project[], filterText: string): Project[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (p: Project) =>
            p.projectName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
