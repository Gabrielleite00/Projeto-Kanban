export function saveTasksToLocalStorage(tasks: any[]) {
  localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
}

export function loadTasksFromLocalStorage(): any[] {
  const storedTasks = localStorage.getItem('kanbanTasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}