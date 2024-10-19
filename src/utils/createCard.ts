import { tasks } from "../data/data";
import { Badge } from "../types/badges.type";
import { updateKanban } from "./updateKanban";

export function createCard() {
    const form = document.querySelector('#adicionar-modal') as HTMLFormElement
    
    form.addEventListener('submit', () => {
        const formData = new FormData(form);
        const title = formData.get("task-name");
        const description = formData.get("task-description");
        const badge = formData.get("task-badge");
        const user = formData.get("task-user");

        if (title && description && badge && user) {
            const task = {
                id: tasks.length + 1,
                title: title.toString(),
                description: description.toString(),
                badge: badge.toString() as Badge,
                user: {
                    name: user.toString(),
                    image: getSelectedUserPhoto(user.toString())
                },
                status: 'pendente'
            }

            tasks.push(task)
        }

        form.reset();

        updateKanban(tasks);
    })
}

function getSelectedUserPhoto(userName: string): string {
    let userPicture: string = ""
    switch (userName) {
        case "aridan":
            userPicture =  "https://avatars.githubusercontent.com/u/70522543?v=4"
            break;
        case "gabriel":
            userPicture =  "https://avatars.githubusercontent.com/u/123703672?v=4"
            break;
        case "daniel":
            userPicture =  "https://avatars.githubusercontent.com/u/137360936?v=4"
            break;
        case "débora":
            userPicture =  "https://avatars.githubusercontent.com/u/150956309?v=4"
            break;
    
        default:
            break;
    }
    return userPicture
}