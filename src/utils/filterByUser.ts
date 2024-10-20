import { tasks } from "../data/data";
import { body } from "../main";
import { renderUI } from "./renderTasks";

const handleClickUser = (evento: MouseEvent) => {
	const elemento = evento.target as HTMLImageElement;
	if (elemento.classList.contains("js-avatar")) {
		const user = elemento.dataset.name!.toLocaleLowerCase();
		const userTasks = tasks.filter(
			(task) => task.user.name.toLocaleLowerCase() === user
		);
		console.log(userTasks, user);

		body!.innerHTML = "";
		renderUI(userTasks);
	}
};

export function filterByUser() {
	document.removeEventListener("click", handleClickUser);
	document.addEventListener("click", handleClickUser);
}
