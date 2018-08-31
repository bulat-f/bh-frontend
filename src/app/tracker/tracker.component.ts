import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service'
import { Project } from '../project'

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  started = false
  seconds = 1000
  interval = null
  currentProject: Project

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService
      .getCurrentProject()
      .subscribe((project: Project) => {
        this.currentProject = project
        console.log(project);

      })
  }

  toggle() {
    if (!this.currentProject) return

    this.started = !this.started;
    if (this.started) {
      this.interval = setInterval((() => this.seconds++), 1000)
    } else {
      clearInterval(this.interval)
    }
  }

  onSelect() {
    this.projectService.setCurrentProject(1)
  }
}
