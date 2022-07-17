import styled from 'styled-components'

import { baseTheme } from '../../styles/themes/baseTheme/baseTheme'

export const PostListStyled = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 20px;

	margin-bottom: 45px;

	@media (max-width: 480px) {
		gap: 10px;
	}
`

export const PostListWarning = styled.h3`
	font-weight: 700;
	font-size: 32px;
	line-height: 24px;

	color: ${baseTheme.colors.black};
`
