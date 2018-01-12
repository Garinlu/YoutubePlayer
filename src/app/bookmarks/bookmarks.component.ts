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
    goToUrl(url) {
        this.appComponent.goUrl(url);
    }

    remove(url) {
        this.bookMarks = this.urlServ.removeBookMArk(url);
    }
}
