import {Component, input} from '@angular/core';
import {TaskComponent} from '../task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
    userName = input.required<string>();
    userId = input.required<string>();
    tasks = [{
      id: 't1',
      userId: 'u1',
      title: 'Angular',
      summary: 'Learn angular',
      dueDate: '21-02-2026',

    }, {
      id: 't2',
      userId: 'u2',
      title: 'React',
      summary: 'Learn React',
      dueDate: '21-02-2026',

    }, {
      id: 't3',
      userId: 'u3',
      title: 'Java',
      summary: 'Learn Java',
      dueDate: '21-02-2026',

    }];
    get selectedUserTasks() {
      return this.tasks.filter(task => task.userId === this.userId())
    }
}
