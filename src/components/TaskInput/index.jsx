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
				required
			/>
			<S.Button
				onClick={handleSubmitTask}
				type="submit"
				disabled={!newTask}
			>
				Criar
				<PlusCircle size={19} />
			</S.Button>
		</S.InputConteiner>
	);
}
