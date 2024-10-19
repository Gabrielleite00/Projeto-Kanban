import { tasks } from "../data/data";
import { body } from "../main";
import { renderUI } from "./renderTasks";

export function filter() {
	const handleClick = (evento: MouseEvent) => {
		const elemento = evento.target as HTMLImageElement;
		if (elemento.classList.contains("js-avatar")) {
			const user = elemento.dataset.name!.toLocaleLowerCase();
			const userTasks = tasks.filter(
				(task) => task.user.name.toLocaleLowerCase() === user
			);
			console.log(userTasks, user);
            
			body!.innerHTML = "";
			renderUI(userTasks);

			document.removeEventListener("click", handleClick);
		}
	};

	document.addEventListener("click", handleClick);
}
