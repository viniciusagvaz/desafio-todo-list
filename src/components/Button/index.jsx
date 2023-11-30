import * as S from "./style";
import plus from "../../assets/imgs/plus.svg";

export function Button() {
	return (
			<S.Button>
				Criar
				<img
					src={plus}
					alt=""
				/>
			</S.Button>
	);
}
