import styled from 'styled-components'

import { baseTheme } from './../../styles/themes/baseTheme/baseTheme'
import { ButtonVariant } from './Button.types'

interface ButtonStyledProps {
	variant?: ButtonVariant
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
	display: block;
	padding: 18px 25px 17px;

	line-height: 0px;

	background: ${baseTheme.colors.accent};
	cursor: pointer;
	border-radius: 10px;
	border: none;

	color: #ffffff;

	transition: all 0.3s linear;

	${(props) =>
		props.variant === 'delete' &&
		`
	color: rgba(255, 0, 0, 1);
	border: 2px solid #FF0000;
	background: none;
	 `}

	@media (max-width: 480px) {
		padding: 18px 20px 17px;

		font-size: 16px;
	}
`
