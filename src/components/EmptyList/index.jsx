import * as S from "./style";
import clipboard from "../../assets/imgs/clipboard.svg";

export function EmptyList() {
	return (
		<S.EmptyList>
			<img
				src={clipboard}
				alt=""
			/>
			<span>Você ainda não tem tarefas cadastradas</span>
			<p>Crie tarefas e organize seus itens a fazer</p>
		</S.EmptyList>
	);
}
