import { tasks } from "../data/data";
import { updateKanban } from "./updateKanban";

export function createCard() {
    const form = document.querySelector('#adicionar-modal') as HTMLFormElement
    
    form.addEventListener('submit', () => {
        const formData = new FormData(form);
        const title = formData.get("task-name");
        const description = formData.get("task-description");
        const user = formData.get("task-user");

        if (title && description && user) {
            const task = {
                id: tasks.length + 1,
                title: title.toString(),
                description: description.toString(),
                user: user.toString(),
                status: 'pendente'
            }

            tasks.push(task)
        }

        console.log(tasks)

        form.reset();

        updateKanban(tasks);
    })
}