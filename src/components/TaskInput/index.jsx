import { PlusCircle } from "@phosphor-icons/react";
import * as S from "./style";
import { useState } from "react";

export function TaskInput() {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");

	const handleNewTask = e => {
		e.preventDefault();

		setNewTask(e.target.value);
	};

	const handleSubmitTask = e => {
		e.preventDefault();

		setTasks(old => [
			...old,
			{
				id: Math.random().toFixed(3) * 1000,
				taskContent: newTask.toString(),
			},
		]);
		setNewTask("");
		console.log(tasks);
	};

	return (
		<S.InputConteiner>
			<S.Input
				type="text"
				placeholder="Adicione uma nova tarefa"
				onChange={handleNewTask}
				value={newTask}
				required
			/>
			<S.Button onClick={handleSubmitTask}>
				Criar
				<PlusCircle size={16} />
			</S.Button>
		</S.InputConteiner>
	);
}
