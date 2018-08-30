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
  tasks = [
    {
      id: 1,
      title: 'Task 1',
      duration: 100
    },
    {
      id: 2,
      title: 'Task 2',
      duration: 100
    },
    {
      id: 3,
      title: 'Task 3',
      duration: 100
    },
    {
      id: 4,
      title: 'Task 4',
      duration: 100
    }
  ]
  activeTaskId = null

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

  onSelect(id) {
    this.activeTaskId = id
  }
}
