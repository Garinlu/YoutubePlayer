import {Component, Input, OnInit} from '@angular/core';
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
    }


}
