import { Columns } from "../components/columns/columns";
import { tasks } from "../data/data";

const columns = new Columns();
export function adicionaEventos() {
    const btnMoveLeft = document.querySelectorAll(".left") as NodeListOf<HTMLButtonElement>;
    const btnMoveRight = document.querySelectorAll(".right") as NodeListOf<HTMLButtonElement>;

    btnMoveLeft.forEach((btn) => {
        btn.addEventListener("click", () => {
            alert("Left button clicked");
        });
    });

    btnMoveRight.forEach((btn) => {
        btn.addEventListener("click", (evento: MouseEvent) => {
            const elemento = evento.target as HTMLButtonElement;
            const clickedCardId = elemento.closest(".kanban-card")?.getAttribute("data-id");
            const task = tasks.find((task) => task.id === Number(clickedCardId));

            if (task) {
                switch (task.status) {
                    case "pendente":
                        task.status = "em progresso";
                        break;
                    case "em progresso":
                        task.status = "finalizado";
                        break;
                    default:
                        break;
                }
            }

            const columnsContainer = document.querySelector(".kanban");
            if (columnsContainer) {
                columnsContainer.innerHTML = columns.render(tasks);
                adicionaEventos();
            }

            console.table(tasks);
        });
    });
}