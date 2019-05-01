import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordsCounter'
})
export class WordsCounterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const wordsArray = value
      .split(' ')
      .filter(item => item !== '');
    return wordsArray.length;
  }

}
