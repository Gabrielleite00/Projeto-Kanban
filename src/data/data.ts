import { Task } from "../interfaces/task.interface";

export const tasks: Task[] = [
	{
		id: 1,
		user: {
			name: "Gabriel",
			image: "https://avatars.githubusercontent.com/u/123703672?v=4"
		},
		title: "Estudar Angular",
		description: "Estudar os decorators @Input e @Output",
		badge: "Design",
		status: "pendente",
		createdAt: new Date(),
	},
	{
		id: 2,
		user: {
			name: "Gabriel",
			image: "https://avatars.githubusercontent.com/u/123703672?v=4"
		},
		title: "Criar componente Modal",
		description: "Criar o componente modal que será chamado ao clicar no botão de adicionar tarefa",
		badge: "Design",
		status: "em progresso",
		createdAt: new Date(),
	},
	{
		id: 3,
		user: {
			name: "Gabriel",
			image: "https://avatars.githubusercontent.com/u/123703672?v=4"
		},
		title: "Revisar conteúdo das aulas",
		description: "Revisar os conceitos relacionados a interfaces e tipos personalizados",
		badge: "Design",
		status: "finalizado",
		createdAt: new Date(),
	},
];