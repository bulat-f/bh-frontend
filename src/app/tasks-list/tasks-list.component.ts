import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service'
import { Task } from '../task'

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks: Task[]
  activeTaskId: number

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    console.log('TasksListComponent');

    this.projectService.getTasks().subscribe((tasks: Task[]) => this.tasks = tasks)
  }

  onSelect(id) {
    this.activeTaskId = id
  }
}
