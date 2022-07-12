import styled from 'styled-components'

export const PostListStyled = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 20px;

	@media (max-width: 480px) {
		gap: 10px;
	}
`
