import { PlusCircle } from "@phosphor-icons/react";
import * as S from "./style";

export function TaskInput({ handleNewTask, newTask, handleSubmitTask }) {
	return (
		<S.InputConteiner>
			<S.Input
				type="text"
				placeholder="Adicione uma nova tarefa"
				onChange={handleNewTask}
				value={newTask}
				minLength={2}
				required
			/>
			<S.Button
				onClick={handleSubmitTask}
				type="submit"
			>
				Criar
				<PlusCircle size={16} />
			</S.Button>
		</S.InputConteiner>
	);
}
