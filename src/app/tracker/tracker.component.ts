import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  started = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.started = !this.started;
  }
}
