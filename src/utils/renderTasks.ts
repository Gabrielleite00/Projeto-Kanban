import { Task } from "../interfaces/task.interface";
import { body, columns, editForm, form, header, modalExcluir } from "../main";
import { createCard } from "./createCard";
import { deleteCard } from "./deleteCard";
import { editCard } from "./editCard";
import { filterByTag } from "./filterByTag";
import { filterByUser } from "./filterByUser";
import { moveCard } from "./moveCard";

export function renderUI(tasks: Task[]) {
	if (body) {
		body.innerHTML += header.render();
		body.innerHTML += columns.render(tasks);
		body.innerHTML += modalExcluir.render();
		body.innerHTML += form.render();
		body.innerHTML += editForm.render()


		window.addEventListener("renderCards", () => {
			form.addEventListeners();
		});




		editCard();
		moveCard();
		deleteCard();
		createCard();
		filterByUser();
		filterByTag();
	}
}
