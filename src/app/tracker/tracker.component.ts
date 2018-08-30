import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  started = false
  seconds = 1000
  interval = null

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.started = !this.started;
    if (this.started) {
      this.interval = setInterval((() => this.seconds++), 1000)
    } else {
      clearInterval(this.interval)
    }
  }
}
