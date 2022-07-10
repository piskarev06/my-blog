import styled from 'styled-components'

import { baseTheme } from './../../styles/themes/baseTheme/baseTheme'
import { ButtonVariant } from './Button.types'

interface ButtonStyledProps {
	variant?: ButtonVariant
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
	display: inline-block;
	padding: 18px 17px 25px;

	background: ${baseTheme.colors.accent};
	cursor: pointer;
	border-radius: 20px;

	ont-weight: 500;
	font-size: 16px;
	line-height: 0px;

	color: #ffffff;

	transition: all 0.3s linear;
`
