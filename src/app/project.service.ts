import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, of } from 'rxjs'
import { tap } from 'rxjs/operators';
import { Project } from './project'
import { Task } from './task'
import { PROJECTS } from './mocks'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  currentProjectId: number
  tasksObservable: ReplaySubject<Task[]>
  currentProjectObservable: ReplaySubject<Project>

  constructor() {
    this.tasksObservable = new ReplaySubject()
    this.currentProjectObservable = new ReplaySubject()
  }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS)
  }

  setCurrentProject(id: number): void {
    this.currentProjectId = id
    const project = PROJECTS.find(project => project.id === this.currentProjectId)

    this.currentProjectObservable.next(project)
    this.tasksObservable.next(project.tasks)
  }

  getCurrentProject(): Observable<Project> {
    return this.currentProjectObservable.asObservable()
  }

  getTasks(): Observable<Task[]> {
    return this.tasksObservable.asObservable()
  }
}

