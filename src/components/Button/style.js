import styled from "styled-components";

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	width: 90px;
	height: 52px;

	padding: 1rem;

	background-color: ${props => props.theme["green-700"]};
	border: none;
	border-radius: 8px;
	line-height: 140%;
	font-weight: bold;

	color: ${props => props.theme["white"]};

	box-shadow: 0 4px 4px 4px rgba(0, 0, 0, 0.25);

	&:hover {
		background-color: ${props => props.theme["green-800"]};
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;
