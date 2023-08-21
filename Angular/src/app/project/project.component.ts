import { Component } from '@angular/core';
import { Project } from './interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  project: Project = {
    id: 1,
    name: 'test',
    img: '',
  };
}
