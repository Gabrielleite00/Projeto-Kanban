import { Task } from "../interfaces/task.interface";

export function saveTasksToLocalStorage(tasks: Task[]) {
  localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
}