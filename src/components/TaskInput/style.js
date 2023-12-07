import styled from "styled-components";

export const InputConteiner = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	width: 46rem;

	margin: 0 auto;

	position: absolute;
	top: 10.65rem;
	left: 0;
	right: 0;
`;

export const Input = styled.input`
	max-width: 39.875rem;
	width: 100%;
	height: 3.375rem;
	padding: 1rem;

	color: ${props => props.theme["gray-200"]};
	background-color: ${props => props.theme["gray-500"]};

	border: none;
	border-radius: 8px;
	box-shadow: 0 4px 4px 4px rgba(0, 0, 0, 0.25);
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

	font-weight: bold;
	font-size: 0.875rem;
	color: ${props => props.theme["white"]};

	box-shadow: 0 4px 4px 4px rgba(0, 0, 0, 0.25);

	&:hover {
		background-color: ${props => props.theme["green-800"]};

		transition: all 0.2s ease-in-out;

		cursor: pointer;
	}

	&:active {
		transition: all 0.1s;
		background-color: ${props => props.disabled && props.theme["red-700"]};
		cursor: not-allowed;
	}
`;
