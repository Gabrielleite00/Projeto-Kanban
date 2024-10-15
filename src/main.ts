import { Columns } from "./components/columns/columns";
import { Header } from "./components/header/header";
import { tasks } from "./data/data";
import "./style.css";
import { adicionaEventos } from "./utils/moveCard";

const header = new Header();
const columns = new Columns();
const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
	console.table(tasks);

	if (body) {
		body.innerHTML += header.render();
		body.innerHTML += columns.render(tasks);
		adicionaEventos();
	}
});
