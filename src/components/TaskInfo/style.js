import styled from "styled-components";

export const TaskInfoContainer = styled.div`
	width: 46rem;
	height: 1.187rem;
	display: flex;
	justify-content: space-between;

	margin: 5rem auto 1.5rem;
`;

const TaskStatus = styled.p`
	display: flex;
	align-items: center;
	gap: 8px;
	line-height: 110%;

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

export const QuantityTasks = styled.span`
	font-size: 0.75rem;
	text-shadow: none;

	padding: 0.125rem 0.5rem;
	border-radius: 62rem;

	color: ${props => props.theme["gray-200"]};
	background-color: ${props => props.theme["gray-400"]};
`;
