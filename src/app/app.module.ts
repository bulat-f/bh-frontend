import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrackerComponent } from './tracker/tracker.component';
import { DurationPipe } from './duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
