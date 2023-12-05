import * as S from "./style";
import { Trash } from "@phosphor-icons/react";
import { TodoInput } from "../../../TodoInput";

export function TaskList() {
	const taskList = ["1", "2", "3"];

	return (
		<S.TasksContainer>
			{taskList.map((task, id) => {
				return (
					<S.TaskCard key={id}>
						<S.Checkbox type="checkbox" />

						<S.Task>{taskList[id]}</S.Task>

						<S.Button>
							<Trash
								size={14}
								color="#808080"
								weight="bold"
							/>
						</S.Button>
					</S.TaskCard>
				);
			})}
			{/* <S.TaskCard>
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
			</S.TaskCard> */}
		</S.TasksContainer>
	);
}
