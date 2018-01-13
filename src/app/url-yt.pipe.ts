import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'urlYt'
})
export class UrlYtPipe implements PipeTransform {

    //Transform the Youtube URL to a iframe url
    transform(url: string): string {
        return _.replace(url, 'watch?v=', 'embed/');
    }

}
