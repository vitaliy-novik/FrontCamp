import { Pipe, PipeTransform } from '@angular/core';
import Article from '../models/article';

@Pipe({
  name: 'articleFilter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Article[], text: string): Article[] {
    if (value && text) {
      return value.filter((a: Article) => {
        return a.title.toUpperCase().includes(text.toUpperCase()) || 
                a.description.toUpperCase().includes(text.toUpperCase());
      });
    }

    return value;
  }

}
