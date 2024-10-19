export class Form {
    users: {name: string, value: string}[]

    constructor() {
        this.users = [
            { name: 'Aridan', value: 'aridan' },
            { name: 'Daniel', value: 'daniel' },
            { name: 'Débora', value: 'débora' },
            { name: 'Gabriel', value: 'gabriel' },
        ]
    }
    
    render(): string {
        return `
            <dialog class="modal">
                <form method="dialog" class="modal__form" id="adicionar-modal">
                    <h2 class="form__title">Adicionar Nova Tarefa</h2>
                    <div class="form__field">
                        <label for="task-name" class="field__label">Nome</label>
                        <input type="text" id="task-name" name="task-name" class="field__input" required />
                    </div>

                    <div class="form__field">
                        <label for="task-description" class="field__label">Descrição</label>
                        <textarea id="task-description" name="task-description" class="field__input--text-area" rows="4" required></textarea>
                    </div>

                    <div class="form__field">
                        <label for="task-badge" class="field__label">Badge</label>
                        <select id="task-badge" name="task-badge" class="field__input" required>
                            <option value="Design">Design</option>
                            <option value="Front-end">Front-end</option>
                            <option value="Back-end">Back-end</option>
                            <option value="UX">UX</option>
                        </select>
                    </div>

                    <div class="form__field">
                        <label for="task-user" class="field__label">Usuário</label>
                        <select id="task-user" name="task-user" class="field__input" required>
                            ${this.users.map((user) => (
                                `<option value="${user.value}">${user.name}</option>`
                            ))}
                        </select>
                    </div>

                    <div class="form__actions">
                        <button id="submit-form">Adicionar</button>
                        <button class="close-modal" type="button">Cancelar</button>
                    </div>
                </form>
            </dialog>
        `
    }

    addEventListeners() {
        const modal = document.querySelector('.modal') as HTMLDialogElement;
        const openModalBtn = document.querySelector('#add-pendente') as HTMLButtonElement;
        const closeModalBtn = document.querySelector('.close-modal') as HTMLButtonElement;
        
        closeModalBtn.addEventListener('click', () => {
            modal.close();
        })

        openModalBtn.addEventListener('click', () => {
            modal.showModal();
        })
    }
}