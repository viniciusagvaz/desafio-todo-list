import * as S from "./style";
import { Trash } from "@phosphor-icons/react";

export function TaskList({ id, taskContent, deleteTask, checkTask }) {
	return (
		<S.TasksContainer>
			<S.TaskCard key={id}>
				<S.Checkbox
					type="checkbox"
					onClick={checkTask}
				/>

				<S.Task>{taskContent}</S.Task>

				<S.Button>
					<Trash
						size={14}
						color="#808080"
						weight="bold"
						onClick={deleteTask}
					/>
				</S.Button>
			</S.TaskCard>
		</S.TasksContainer>
	);
}

// {
//   tasks.map((id, task) => {
//   return (TaskList(task))
//   })}

// {
/* <S.TaskCard>
  <S.Checkbox type="checkbox" />

  <S.Task>{taskList}</S.Task>

  <S.Button>
    <Trash
      size={14}
      color="#808080"
      weight="bold"
    />
  </S.Button>
</S.TaskCard>

<S.TaskCard>
  <S.Checkbox type="checkbox" />

  <S.TaskChecked>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ducimus
    corrupti cupiditate eius temporibus tempora vero
  </S.TaskChecked>

  <S.Button>
    <Trash
      size={14}
      color="#808080"
      weight="bold"
    />
  </S.Button>
</S.TaskCard> */
