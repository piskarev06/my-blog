import styled from 'styled-components'

import { baseTheme } from '../../styles/themes/baseTheme/baseTheme'

interface PaginationStyledProps {
	active: boolean
}

export const PaginationStyled = styled.button<PaginationStyledProps>`
	padding: 10px 16px;

	display: flex;
	justify-content: center;
	align-items: center;

	font-weight: 600;
	font-size: 22px;
	line-height: 100%;

	width: 50px;

	background: #ffffff;
	border: 2px solid ${baseTheme.colors.accent};
	border-radius: 10px;

	color: ${baseTheme.colors.accent};
	transition: all 0.3s linear;
	cursor: pointer;

	${(props) =>
		props.active === true &&
		`
		color: #ffffff;
        background: ${baseTheme.colors.accent};
	 `}
`
