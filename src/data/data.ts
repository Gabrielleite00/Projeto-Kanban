import { Task } from "../interfaces/task.interface";

export const tasks: Task[] = [
	{
		id: 1,
		user: "Daniel",
		title: "Estudar Angular",
		description: "Estudar os decorators @Input e @Output",
		status: "pendente",
	},
	{
		id: 2,
		user: "Aridan",
		title: "Criar componente Modal",
		description: "Criar o componente modal que será chamado ao clicar no botão de adicionar tarefa",
		status: "em progresso",
	},
	{
		id: 3,
		user: "Debora",
		title: "Revisar conteúdo das aulas",
		description: "Revisar os conceitos relacionados a interfaces e tipos personalizados",
		status: "finalizado",
	},
];
