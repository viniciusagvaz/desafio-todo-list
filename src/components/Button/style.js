import styled from "styled-components";

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	filter: drop-shadow(0.1rem 0.05rem 0.5rem black);

	padding: 1rem;

	background-color: ${props => props.theme["green-700"]};
	border: none;
	border-radius: 8px;
	line-height: 140%;
	font-weight: bold;

	color: ${props => props.theme["white"]};

	box-shadow: 2px 2px 3px #0d0d0d;

	&:hover {
		background-color: ${props => props.theme["green-800"]};
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;
