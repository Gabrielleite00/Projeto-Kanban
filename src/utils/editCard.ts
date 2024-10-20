import { tasks } from "../data/data";
import { Badge } from "../types/badges.type";
import { updateKanban } from "./updateKanban";

export function editCard() {
    const editForm = document.querySelector('#editar-modal') as HTMLFormElement
    const editModal = document.querySelector('.edit-modal') as HTMLDialogElement
    const closeBtn = document.querySelector('.close-edit-modal') as HTMLButtonElement
    const taskTitle = document.querySelector('#edit-task-name') as HTMLInputElement
    const taskDescription = document.querySelector('#edit-task-description') as HTMLTextAreaElement
    const taskBadge = document.querySelector('#edit-task-badge') as HTMLSelectElement
    let currentTaskIndex: number;

    document.body.addEventListener('click', (event: MouseEvent) => {
        const target = event.target as HTMLElement;
    
        if (target.matches('.fa-pen-to-square')) {
            const taskId = Number(target.closest(".kanban-card")?.getAttribute("data-id"))
            currentTaskIndex = tasks.findIndex(task => task.id === taskId)

            if (currentTaskIndex !== -1) {
                taskTitle.value = tasks[currentTaskIndex].title
                taskDescription.value = tasks[currentTaskIndex].description
                taskBadge.value = tasks[currentTaskIndex].badge
            }
            
            editModal.showModal()
        }
    });
    
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (currentTaskIndex !== -1) {
            tasks[currentTaskIndex] = {
                ...tasks[currentTaskIndex],
                title: taskTitle.value,
                description: taskDescription.value,
                badge: taskBadge.value as Badge
            }
            
            updateKanban(tasks)
        }

        editForm.reset()
        editModal.close()
    }) 

    closeBtn.addEventListener('click', () => {
        editModal.close();
    })
}


