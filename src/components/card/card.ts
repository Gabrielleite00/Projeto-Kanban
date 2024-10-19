import { ColumnType } from "../../types/column.type";

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

	render(id: number, badge: string, title: string, description: string, picture: string, status: ColumnType): string {
		return `
            <div class="kanban-card" data-id=${id}>
                <div class="badge">
                    <span class="badge-tag ${this.getBadgeColor(badge.toLowerCase())}">${badge}</span>
                    <button class="btn-excluir">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="card">
                    <h2 class="card-title">
                        ${title}
                    </h2>
                    <p class="card-description">
                        ${description}
                    </p>
                </div>

                <div class="card-infos">
                    <div class="users">
                        <img src="${picture}" alt="Profile picture">
                    </div>
                    
                    <div class="card-icons">
                        <p>
                            <i class="fa-regular fa-comment-dots" style="color: #000000;"></i>
                            <span>1</span>
                        </p>

                        <p>
                            <i class="fa-solid fa-paperclip" style="color: #000000;"></i>
                            <span>files</span>
                        </p>
                    </div>

                </div>
                
                <div class="kanban-card-buttons">
                    <div class="move-buttons">                                    
                        
                        ${ status === "pendente"
                        ? `
                            <button class="move-card right">
                                <i class="fa-solid fa-arrow-right-long" style="color: #000000;"></i>
                            </button>
                        `
                        : status === "finalizado"
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