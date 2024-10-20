import { Columns } from "../components/columns/columns";
import { Task } from "../interfaces/task.interface";
import { moveCard } from "./moveCard";
import { saveTasksToLocalStorage } from "./storageUtils";

const columns = new Columns();

export function updateKanban(tasks: Task[]) {
	const columnsContainer = document.querySelector(".kanban");
	if (columnsContainer) {
		columnsContainer.innerHTML = columns.render(tasks);
		saveTasksToLocalStorage(tasks)
		moveCard();
	}
}