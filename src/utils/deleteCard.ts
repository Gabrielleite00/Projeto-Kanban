import { tasks } from "../data/data";
import { updateKanban } from "./updateKanban";

export function deleteCard() {
    const btnExcluir = document.querySelectorAll(".btn-excluir")
    const modalExcluir = document.querySelector(".excluir-modal") as HTMLDialogElement;
    const btnConfirmaExcluir = modalExcluir.querySelector("button:last-child");
    const btnCancelar = modalExcluir.querySelector("button:first-child")
    let taskId: number;
    
    if (btnCancelar) {
        btnCancelar.addEventListener("click", () => {
            modalExcluir.close();
            return;
        })        
    }

    btnExcluir.forEach((btn) => {
        btn.addEventListener("click", (evento: Event) => {
            modalExcluir.showModal()
            const elementoBtn = evento.target as HTMLButtonElement;
            taskId = Number(elementoBtn.closest(".kanban-card")?.getAttribute("data-id"))
        })
    })

    btnConfirmaExcluir?.addEventListener("click", () => {
        const index = tasks.findIndex(item => item.id === taskId)            
        if (index !== -1) {
            tasks.splice(index, 1)
            updateKanban(tasks)
            modalExcluir.close()
        }
    })
}