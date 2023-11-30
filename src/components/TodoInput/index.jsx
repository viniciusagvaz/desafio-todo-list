
import { Button } from "../Button";
import * as S from "./style";

export function TodoInput() {
	return (
		<S.InputConteiner>
			<S.Input type="text" placeholder="Adicione uma nova tarefa"/>
      <Button/>
		</S.InputConteiner>
	);
}
