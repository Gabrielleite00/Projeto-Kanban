import { Task } from "../../interfaces/task.interface";
import { Card } from "../card/card";

const cards = new Card();
export class Columns {
	render(tasks: Task[]): string {
		return `
            <main class="kanban">
                <section class="kanban-column" data-id="1">
                    <header class="kanban-title">
                        <div class="kanban-pendentes">
                            <h2>Pendente</h2>
                            <span class="kanban-pendentes-number">${tasks.filter(task => task.status === "pendente").length}</span>
                        </div>
                        <button class="add-card" id="add-pendente">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </header>
                    <hr data-id="first-column"/>
                    <div class="kanban-cards">
                        ${tasks
							.map((task) =>
								task.status === "pendente"
									? cards.render(
											task.id,
                                            task.badge,
											task.title,
											task.description,
                                            task.user.image,
											task.status
									)
									: ``
							)
							.join("")}
                    </div>
                </section>
                <section class="kanban-column" data-id="2">
                    <header class="kanban-title">
                        <div class="kanban-em-progresso">
                            <h2>Em progresso</h2>
                            <span class="kanban-em-progresso-number">${tasks.filter(task => task.status === "em progresso").length}</span>
                        </div>
                    </header>
                    <hr data-id="second-column"/>
                    <div class="kanban-cards">
                        ${tasks
							.map((task) =>
								task.status === "em progresso"
									? cards.render(
											task.id,
                                            task.badge,
											task.title,
											task.description,
                                            task.user.image,
											task.status
									)
									: ``
							)
							.join("")}
                    </div>
                </section>
                <section class="kanban-column" data-id="3">
                    <header class="kanban-title">
                        <div class="kanban-finalizadas">
                            <h2>Finalizado</h2>
                            <span class="kanban-finalizadas-number">${tasks.filter(task => task.status === "finalizado").length}</span>
                        </div>
                    </header>
                    <hr data-id="third-column"/>
                    <div class="kanban-cards">
                        ${tasks
							.map((task) =>
								task.status === "finalizado"
									? cards.render(
											task.id,
                                            task.badge,
											task.title,
											task.description,
                                            task.user.image,
											task.status
                                        )
									: ``
							)
							.join("")}
                    </div>
                </section>
            </main>
            
        `;
	}
}
