import * as S from "./style";

export function TaskInfo() {
	return (
		<S.TaskInfoContainer>
			<S.CreatedTasks>
				Tarefas Criadas <S.QuantityTasks>0</S.QuantityTasks>
			</S.CreatedTasks>

			<S.CompletedTaks>
				Concluídas 
        <S.QuantityTasks>
         0
        </S.QuantityTasks>
			</S.CompletedTaks>
		</S.TaskInfoContainer>
	);
}
