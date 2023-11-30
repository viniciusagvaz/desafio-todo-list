import styled from "styled-components";

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
	max-width: 39.8rem;
	padding: 1rem;
	width: 100%;

	background-color: ${props => props.theme["gray-500"]};
  color: ${props => props.theme["white"]};
  line-height: 140%;
  border: none;
	border-radius: 8px;

  filter: drop-shadow(0.1rem .05rem 0.5rem black);
  `;
