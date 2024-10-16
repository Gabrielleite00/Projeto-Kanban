import { ColumnType } from "../../types/column.type";

export class Card {

	render(id: number, title: string, description: string, status: ColumnType): string {
		return `
            <div class="kanban-card" data-id=${id}>
                <div class="badge">
                    <span class="badge-tag">Design</span>
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
                        <img src="https://avatars.githubusercontent.com/u/123703672?v=4" alt="Avatar 1" class="avatar">
                        <img src="https://avatars.githubusercontent.com/u/137360936?v=4" alt="Avatar 2" class="avatar">
                        <img src="https://avatars.githubusercontent.com/u/70522543?v=4" alt="Avatar 3" class="avatar">
                        <img src="https://avatars.githubusercontent.com/u/150956309?v=4" alt="Avatar 3" class="avatar">
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
