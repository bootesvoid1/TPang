import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' },
  ];

  newTask = '';
  editingTaskId: number | null = null;

  addTask(): void {
    if (this.newTask.trim() === '') return;
    console.log(this.newTask)
    this.tasks.push({ id: this.tasks.length + 1, text: this.newTask });
    this.newTask = '';
  }

  editTask(taskId: number): void {
    this.editingTaskId = taskId;
    this.newTask = this.tasks.find(task => task.id === taskId)?.text || '';
  }

  updateTask(): void {
    if (this.editingTaskId !== null) {
      const taskIndex = this.tasks.findIndex(task => task.id === this.editingTaskId);
      if (taskIndex !== -1) {
        this.tasks[taskIndex].text = this.newTask;
      }
      this.newTask = '';
      this.editingTaskId = null;
    }
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
