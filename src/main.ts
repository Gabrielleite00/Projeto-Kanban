import { Columns } from "./components/columns/columns";
import { EditForm } from "./components/edit-form/edit-form";
import { Form } from "./components/form/form";
import { Header } from "./components/header/header";
import { ModalExcluir } from "./components/modal-excluir/modal-excluir";
import { tasks } from "./data/data";
import "./style.css";
import { renderUI } from "./utils/renderTasks";

export const header = new Header();
export const columns = new Columns();
export const modalExcluir = new ModalExcluir();
export const form = new Form();
export const editForm = new EditForm();
export const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
	renderUI(tasks);
});