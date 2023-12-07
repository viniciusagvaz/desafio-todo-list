import styled from "styled-components";

export const TasksContainer = styled.div`
	max-width: 736px;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem auto 0;
	justify-content: center;

	gap: 0.75rem;
`;

export const TaskCard = styled.label`
	display: flex;
	align-items: baseline;
	justify-content: center;
	gap: 1rem;

	padding: 1rem;
	width: 46rem;

	border-radius: 8px;
	border: 1px solid ${props => props.theme["gray-400"]};

	font-size: 0.875rem;
	background-color: ${props => props.theme["gray-500"]};
	color: ${props => props.theme["gray-200"]};

	span {
		position: absolute;
		left: 2.05rem;
		bottom: 1.05rem;
	}
`;

export const Task = styled.p`
	max-width: 632px;
	word-wrap: break-word;
	width: 100%;
	font-size: 0.875rem;
	font-weight: 300;
`;

export const TaskChecked = styled(Task)`
	color: ${props => props.theme["gray-300"]};
	text-decoration: line-through;
`;

export const Checkbox = styled.input`
	height: 1rem;
	width: 1rem;
`;

export const Button = styled.button`
	background-color: transparent;
	border: none;

	&:hover path {
		transition: ease-in-out 0.3s fill;
		fill: ${props => props.theme["red-500"]};
	}
`;
