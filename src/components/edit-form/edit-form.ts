export class EditForm {
    render(): string {
        return `
            <dialog class="edit-modal">
                <form method="dialog" class="modal__form" id="editar-modal">
                    <h2 class="form__title">Editar Tarefa</h2>
                    <div class="form__field">
                        <label for="edit-task-name" class="field__label">Nome</label>
                        <input type="text" id="edit-task-name" name="edit-task-name" class="field__input" required />
                    </div>

                    <div class="form__field">
                        <label for="edit-task-description" class="field__label">Descrição</label>
                        <textarea id="edit-task-description" name="edit-task-description" class="field__input--text-area" rows="4" required></textarea>
                    </div>

                    <div class="form__field">
                        <label for="edit-task-badge" class="field__label">Badge</label>
                        <select id="edit-task-badge" name="edit-task-badge" class="field__input" required>
                            <option value="Design">Design</option>
                            <option value="Front-end">Front-end</option>
                            <option value="Back-end">Back-end</option>
                            <option value="UX">UX</option>
                        </select>
                    </div>

                    <div class="form__actions">
                        <button id="submit-edit-form">Editar</button>
                        <button class="close-edit-modal" type="button">Cancelar</button>
                    </div>
                </form>
            </dialog>
        `
    }
}