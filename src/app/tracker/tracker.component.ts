import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service'
import { Task } from '../task'

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  started = false
  seconds = 1000
  interval = null
  currentProjectId: number
  tasks: Task[]
  activeTaskId: number

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getTasks().subscribe((tasks: Task[]) => this.tasks = tasks)
    this.projectService.setCurrentProject(1).subscribe((id: number) => this.currentProjectId = id)
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
