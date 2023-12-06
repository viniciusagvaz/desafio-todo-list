import styled from "styled-components";

export const RenderContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

export const InputConteiner = styled.div`
	width: 46rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin: 0 auto;
	position: absolute;
	top: 170px;
	left: 0;
	right: 0;
`;

export const Input = styled.input`
	max-width: 39.875rem;
	width: 100%;
	height: 3.375rem;
	color: #fff;
	padding: 1rem;
	background-color: ${props => props.theme["gray-500"]};
	border: none;
	border-radius: 8px;
	box-shadow: 0 4px 4px 4px rgba(0, 0, 0, 0.25);

	line-height: 140%;
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	padding: 1rem;

	background-color: ${props => props.theme["green-700"]};
	border: none;
	border-radius: 8px;
	line-height: 140%;
	font-weight: bold;
	font-size: 0.875rem;

	color: ${props => props.theme["white"]};

	box-shadow: 0 4px 4px 4px rgba(0, 0, 0, 0.25);

	&:hover {
		background-color: ${props => props.theme["green-800"]};
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;
