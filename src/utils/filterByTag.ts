import { tasks } from "../data/data";
import { body } from "../main";
import { renderUI } from "./renderTasks";

const handleClickTag = (evento: MouseEvent) => {
	const elemento = evento.target as HTMLButtonElement;
	if (elemento.classList.contains("js-tag")) {
		const tag = elemento.dataset.tag!.toLocaleLowerCase();
		const userTasks = tasks.filter(
			(task) => task.badge.toLocaleLowerCase() === tag
		);
		console.log(userTasks, tag);

		body!.innerHTML = "";
		renderUI(userTasks);
	}
};

export function filterByTag() {
	document.removeEventListener("click", handleClickTag);
	document.addEventListener("click", handleClickTag);
}
