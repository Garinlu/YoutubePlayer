import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    url;
    url_tmp;

    goUrl() {
        this.url = this.url_tmp;
    }
}
