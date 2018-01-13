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

    //Get the previous history and bookmarks (empty array if both are null)
    ngOnInit(): void {
        this.history = this.urlServ.getHistory();
        this.bookMarks = this.urlServ.getBookMarks();
    }

    //Check if the new url is different from the actual url and if the string is an url.
    //If ok, send the new url to the video component and add it in the history (localstorage and class variable)
    goUrl(url) {
        let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        let regex = new RegExp(expression);
        if (this.url != url && regex.test(url)) {
            this.url = url;
            this.url_tmp = url;
            this.history = this.urlServ.addHistory(url);
        }
    }

    //Add the new url in the bookmarks (localstorage and class variable)
    addToMarks(url) {
        this.bookMarks = this.urlServ.addBookMArk(url);
    }
}
