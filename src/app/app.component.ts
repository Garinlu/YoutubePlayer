import {Component, OnInit} from '@angular/core';
import {UrlService} from './url.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    url;
    url_tmp;
    history: string[];
    bookMarks: string[];

    constructor(private urlServ: UrlService) {
    }

    ngOnInit(): void {
        this.history = this.urlServ.getHistory();
        this.bookMarks = this.urlServ.getBookMarks();
    }

    goUrl(url) {
        if (this.url != url) {
            this.url = url;
            this.url_tmp = url;
            this.history = this.urlServ.addHistory(url);
        }
    }

    addToMarks(url) {
        this.bookMarks = this.urlServ.addBookMArk(url);
    }
}
