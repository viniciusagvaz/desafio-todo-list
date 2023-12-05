import styled from "styled-components";

export const TasksContainer = styled.div`
	max-width: 736px;
	width: 100%;

	margin: 1.5rem auto 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 0.75rem;
`;

export const TaskCard = styled.label`
	display: flex;
	align-items: baseline;
	justify-content: space-evenly;
	border-radius: 8px;
	padding: 1rem;
	gap: 1rem;

	font-size: 0.875rem;
	background-color: ${props => props.theme["gray-500"]};
	color: ${props => props.theme["gray-200"]};
	border: 1px solid ${props => props.theme["gray-400"]};
`;

export const Task = styled.p`
	width: 632px;
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
