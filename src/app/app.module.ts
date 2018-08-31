import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrackerComponent } from './tracker/tracker.component';
import { DurationPipe } from './duration.pipe';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    DurationPipe,
    TasksListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
