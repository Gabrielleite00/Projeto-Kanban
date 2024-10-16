import { tasks } from "../data/data";
import { updateKanban } from "./updateKanban";
import { updateTaskStatus } from "./updateTaskStatus";

export function handleButtonClick(event: MouseEvent, direction: 'left' | 'right') {
    const elemento = event.target as HTMLButtonElement;
    const clickedCardId = elemento.closest(".kanban-card")?.getAttribute("data-id");
    const task = tasks.find((task) => task.id === Number(clickedCardId));
    
    updateTaskStatus(task, direction);
    updateKanban(tasks);
}