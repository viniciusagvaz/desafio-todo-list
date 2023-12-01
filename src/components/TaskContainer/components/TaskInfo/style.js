import styled from "styled-components";

export const TaskInfoContainer = styled.div`
	width: 46rem;
	height: 1.187rem;
	display: flex;
	justify-content: space-between;
`;

const TaskStatus = styled.p`
	display: flex;
	align-items: center;
	gap: 8px;

	font-weight: bold;
	font-size: 0.875rem;
	filter: drop-shadow(0 4px 0.25rem black);
`;

export const CreatedTasks = styled(TaskStatus)`
	color: ${props => props.theme["green-500"]};
	text-shadow: 0.1rem 0 black, 0 0.1rem black, 0.2rem 0 black, 0 -0.1rem black;
`;

export const CompletedTaks = styled(TaskStatus)`
	color: ${props => props.theme["white"]};
`;

export const QuantityTasks = styled.p`
	font-size: 0.75rem;
	text-align: center;
	text-shadow: none;

	padding: 0.125rem 0.5rem;
	border-radius: 999px;

	color: ${props => props.theme["gray-200"]};
	background-color: ${props => props.theme["gray-400"]};
`;
