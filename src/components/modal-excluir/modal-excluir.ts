export class ModalExcluir {
    render(): string {
        return `
            <dialog class="excluir-modal">
                <p>Tem certeza que deseja excluir essa tarefa?</p>
                <div class="modal-excluir-buttons">
                    <button>Não</button>
                    <button>Sim</button>
                </div>
            </dialog>
        `
    }
}