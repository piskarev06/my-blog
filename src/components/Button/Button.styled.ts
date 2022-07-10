import styled from 'styled-components'

import { baseTheme } from './../../styles/themes/baseTheme/baseTheme'
import { ButtonVariant } from './Button.types'

interface ButtonStyledProps {
	variant?: ButtonVariant
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
	display: block;
	padding: 18px 25px 17px;

	background: ${baseTheme.colors.accent};
	cursor: pointer;
	border-radius: 20px;
	border: none;

	color: #ffffff;

	transition: all 0.3s linear;

	${(props) =>
		props.variant === 'delete' &&
		`
	color: rgba(255, 0, 0, 1);
	border: 2px solid #FF0000;
	 `}
`
