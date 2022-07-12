import styled from 'styled-components'

import { baseTheme } from './../../styles/themes/baseTheme/baseTheme'

export const PostStyled = styled.div`
	padding: 25px;

	display: flex;
	justify-content: space-between;

	background: #f8f9fa;
	border-radius: 20px;
`

export const PostTitle = styled.h3`
	font-weight: 500;
	font-size: 16px;
	line-height: 0px;

	color: #565d66;

	margin: 0 0 15px;
`

export const PostDesc = styled.p`
	max-width: 448px;

	font-size: 12px;
	line-height: 14px;

	color: ${baseTheme.colors.lightGray};
`

export const PostRight = styled.div`
	display: flex;
	gap: 20px;

	@media (max-width: 480px) {
		flex-direction: column;
		gap: 10px;
	}
`
