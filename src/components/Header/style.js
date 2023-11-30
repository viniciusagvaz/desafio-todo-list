import styled from "styled-components";

export const Header = styled.div`
	display: flex;
	justify-content: center;
	height: 200px;
	align-items: center;

	background-color: ${props => props.theme["gray-900"]};
`;

