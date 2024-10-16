import { Task } from "../interfaces/task.interface";

export function updateTaskStatus(task: Task | undefined, direction: 'left' | 'right') {
    
    if (!task) return;

    const taskStatus = ['pendente', 'em progresso', 'finalizado'];
    const currentIndex = taskStatus.indexOf(task.status);
    
    if (direction === 'left' && currentIndex > 0) {
        task.status = taskStatus[currentIndex - 1];
    } else if (direction === 'right' && currentIndex < taskStatus.length - 1) {
        task.status = taskStatus[currentIndex + 1];
    }
}