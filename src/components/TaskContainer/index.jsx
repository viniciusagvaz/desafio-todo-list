import { TaskInfo } from "./components/TaskInfo";
import * as S from "./style";

export function TaskContainer() {
  return (
    <S.TaskTableContainer>
        <TaskInfo/>
    </S.TaskTableContainer>
  )
}