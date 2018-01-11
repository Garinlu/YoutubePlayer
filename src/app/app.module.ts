import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';

import {AppComponent} from './app.component';
import { HistoryComponent } from './history/history.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { VideoComponent } from './video/video.component';


@NgModule({
    declarations: [
        AppComponent,
        HistoryComponent,
        BookmarksComponent,
        VideoComponent
    ],
    imports: [
        BrowserModule,
        SuiModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
