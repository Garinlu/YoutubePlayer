import {Injectable} from '@angular/core';
import * as _ from "lodash";

@Injectable()
export class UrlService {
    history: string[];
    bookMarks: string[];

    getHistory() {
        this.history = JSON.parse(localStorage.getItem('history'));
        return this.history = (this.history == null) ? [] : this.history;
    }

    getBookMarks() {
        this.bookMarks = JSON.parse(localStorage.getItem('bookMarks'));
        return this.bookMarks = (this.bookMarks == null) ? [] : this.bookMarks;
    }

    addHistory(url) {
        this.history = _.concat([url], this.history);
        localStorage.setItem('history', JSON.stringify(this.history));
        return this.history;
    }

    addBookMArk(url) {
        if (!this.bookMarks.includes(url))
            this.bookMarks = _.concat([url], this.bookMarks);
        localStorage.setItem('bookMarks', JSON.stringify(this.bookMarks));
        return this.bookMarks;
    }

    removeBookMArk(url) {
        this.bookMarks = _.pull(this.bookMarks, url);
        localStorage.setItem('bookMarks', JSON.stringify(this.bookMarks));
        return this.bookMarks;
    }

    clearHistory() {
        localStorage.removeItem('history');
        return this.history = [];
    }
}