import styled from "styled-components";

export const EmptyList = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	width: 736px;

	padding: 4rem 1.5rem;

	margin: 1rem auto 0;

	border-top: 1px solid ${props => props.theme["gray-400"]};
	border-radius: 8px;

	img {
		width: 56px;
	}

	span {
		margin: 1rem auto 0;
		color: ${props => props.theme["gray-300"]};
		font-weight: bold;
	}
	p {
		line-height: 140%;
		color: ${props => props.theme["gray-300"]};
	}
`;
