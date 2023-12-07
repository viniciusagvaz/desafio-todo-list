import * as S from "./style";

export function TaskInfo({ taskQuantity, tasksDone, tasksTotal }) {
	return (
		<S.TaskInfoContainer>
			<S.CreatedTasks>
				Tarefas Criadas <S.QuantityTasks>{taskQuantity}</S.QuantityTasks>
			</S.CreatedTasks>

			<S.CompletedTaks>
				Concluídas
				<S.QuantityTasks>
					{tasksDone} de {tasksTotal}
				</S.QuantityTasks>
			</S.CompletedTaks>
		</S.TaskInfoContainer>
	);
}
