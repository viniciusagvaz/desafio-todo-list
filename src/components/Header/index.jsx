import logo from "../../assets/imgs/logo.png";
import * as S from "./style";

export function Header() {
	return (
		<S.Header>
			<img
				src={logo}
				alt=""
			/>
		</S.Header>
	);
}
