import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter',
  standalone: true,
})
export class HighlighterPipe implements PipeTransform {
  transform(value: number | string, searchKey: string | null): string {
    if (!searchKey || !searchKey.length) return value.toString();
    const re = new RegExp(searchKey, 'igm');
    let newValue = value
      .toString()
      .replace(re, '<span class="highlighted">$&</span>');
    return newValue;
  }
}
