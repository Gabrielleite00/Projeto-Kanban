import { Columns } from "./components/columns/columns";
import { Form } from "./components/form/form";
import { Header } from "./components/header/header";
import { ModalExcluir } from "./components/modal-excluir/modal-excluir";
import { tasks } from "./data/data";
import "./style.css";
import { createCard } from "./utils/createCard";
import { deleteCard } from "./utils/deleteCard";
import { moveCard } from "./utils/moveCard";

const header = new Header();
const columns = new Columns();
const modalExcluir = new ModalExcluir();
const form = new Form();
const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
	console.table(tasks);

	if (body) {
		body.innerHTML += header.render();
		body.innerHTML += columns.render(tasks);
		body.innerHTML += modalExcluir.render();
		body.innerHTML += form.render();
		
		window.addEventListener('renderCards', () => {
			form.addEventListeners();
		})

		moveCard();
		deleteCard();
		createCard();
	}
});

