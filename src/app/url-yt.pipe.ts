import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'urlYt'
})
export class UrlYtPipe implements PipeTransform {


    transform(url: string): string {
        return _.replace(url, 'watch?v=', 'embed/');

    }

}
