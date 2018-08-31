import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs'
import { map, tap } from 'rxjs/operators';
import { Project } from './project'
import { Task } from './task'
import { PROJECTS } from './mocks'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  currentProjectId: number
  tasksObservable: Subject<Task[]>

  constructor() {
    this.tasksObservable = new Subject
  }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS)
  }

  setCurrentProject(id: number): Observable<number> {
    this.currentProjectId = id
    return of(PROJECTS.find(project => project.id === id)).pipe(
      tap((project: Project) => this.tasksObservable.next(project.tasks)),
      map((project: Project): number => project.id)
    )
  }

  getCurrentProject(): Observable<Project> {
    return of(PROJECTS.find(
      (project: Project): boolean => (project.id === this.currentProjectId)
    ))
  }

  getTasks(): Observable<Task[]> {
    return this.tasksObservable.asObservable()
  }
}

