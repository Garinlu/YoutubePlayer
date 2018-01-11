import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
    @Input() url: string;

    constructor(public sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        console.log(this.url);
        this.url = _.replace(this.url, 'watch?v=', 'embed/');
        console.log(this.url);
    }


}
