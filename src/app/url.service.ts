import {Injectable} from '@angular/core';
import * as _ from "lodash";

//Service dealing with the Javascript localstorage and the data
@Injectable()
export class UrlService {
    history: string[];
    bookMarks: string[];

    //Get all urls saved in the history (in an array)
    getHistory() {
        this.history = JSON.parse(localStorage.getItem('history'));
        return this.history = (this.history == null) ? [] : this.history;
    }

    //Get all urls saved in the bookmarks (in an array)
    getBookMarks() {
        this.bookMarks = JSON.parse(localStorage.getItem('bookMarks'));
        return this.bookMarks = (this.bookMarks == null) ? [] : this.bookMarks;
    }

    //Add an url to the history and return all urls in the history
    addHistory(url) {
        this.history = _.concat([url], this.history);
        localStorage.setItem('history', JSON.stringify(this.history));
        return this.history;
    }

    //Add an url to the bookmarks and return the bookmarks
    addBookMArk(url) {
        if (!this.bookMarks.includes(url))
            this.bookMarks = _.concat([url], this.bookMarks);
        localStorage.setItem('bookMarks', JSON.stringify(this.bookMarks));
        return this.bookMarks;
    }

    //Remove an url from the bookmarks
    removeBookMarks(url) {
        this.bookMarks = _.pull(this.bookMarks, url);
        localStorage.setItem('bookMarks', JSON.stringify(this.bookMarks));
        return this.bookMarks;
    }

    //Clear the history
    clearHistory() {
        localStorage.removeItem('history');
        return this.history = [];
    }
}