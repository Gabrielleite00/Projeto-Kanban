import { Task } from "../../interfaces/task.interface";

export class Card {

    getBadgeColor(badge: string): string {
        let badgeColor: string = ""
        switch (badge) {
            case "design":
                badgeColor = "blue"
                break;
            case "ux":
                badgeColor = "orange"
                break;
            case "front-end":
                badgeColor = "green"
                break;
            case "back-end":
                badgeColor = "red"
                break;
        
            default:
                break;
        }
        return badgeColor
    }

	render(task: Task): string {
		return `
            <div class="kanban-card" data-id=${task.id}>
                <div class="kanban-card__header">
                    <span class="badge-tag ${this.getBadgeColor(task.badge.toLowerCase())}">${task.badge}</span>
                    <div class="header__btns">
                        <button class="btn-excluir">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                        </button>

                        <button class="btn-editar">
                            <i class="fa-solid fa-pen-to-square" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <div class="card">

                    <h2 class="card-title">
                        ${task.title}
                    </h2>
                    <p class="card-description">
                        ${task.description}
                    </p>
                </div>

                <div class="card-infos">
                    <div class="users">
                        <img src="${task.user.image}" alt="Foto de ${task.user.name}">
                    </div>
                    <span class="card-date">
                        <i class="fa-regular fa-calendar"></i>
                        ${Intl.DateTimeFormat('pt-BR').format(task.createdAt)}
                    </span>
                </div>
                
                <div class="kanban-card-buttons">
                    <div class="move-buttons">                                    
                        
                        ${ task.status === "pendente"
                        ? `
                            <button class="move-card right">
                                <i class="fa-solid fa-arrow-right-long" style="color: #000000;"></i>
                            </button>
                        `
                        : task.status === "finalizado"
                        ? `
                            <button class="move-card left">
                                <i class="fa-solid fa-arrow-left-long" style="color: #000000;"></i>
                            </button>
                        `
                        : `
                            <button class="move-card left">
                                <i class="fa-solid fa-arrow-left-long" style="color: #000000;"></i>
                            </button>                       
                            <button class="move-card right">
                                <i class="fa-solid fa-arrow-right-long" style="color: #000000;"></i>
                            </button>
                        `}


                    </div>
                </div>
                
            </div>
        `;
	}
}