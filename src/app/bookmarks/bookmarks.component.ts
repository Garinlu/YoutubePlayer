import {Component, Input} from '@angular/core';
import {AppComponent} from '../app.component';
import {UrlService} from '../url.service';

@Component({
    selector: 'app-bookmarks',
    templateUrl: './bookmarks.component.html',
    styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {
    @Input() bookMarks: string[];

    constructor(private appComponent: AppComponent, private urlServ: UrlService) {
    }

    //Watch the video with this url
    goToUrl(url) {
        this.appComponent.goUrl(url);
    }

    //Remove an url form the bookmarks
    remove(url) {
        this.bookMarks = this.urlServ.removeBookMarks(url);
    }
}
