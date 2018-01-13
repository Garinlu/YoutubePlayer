import {Component, Input} from '@angular/core';
import {AppComponent} from '../app.component';
import {UrlService} from '../url.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent {
    @Input() history: string[];

    constructor(private appComponent: AppComponent, private urlServ: UrlService) {
    }

    //Watch the video with this url
    goToUrl(url) {
        this.appComponent.goUrl(url);
    }

    //Remove all the history
    clearHistory() {
        this.history = this.urlServ.clearHistory();
    }

}
