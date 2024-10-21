import { Task } from "../interfaces/task.interface";

export const tasks: Task[] = JSON.parse(localStorage.getItem('kanbanTasks') ?? '[]') || [];