import React, { FC } from 'react'

import type { ButtonVariant } from './Button.types'
import { ButtonStyled } from './Button.styled'

interface ButtonProps {
	children: string
	variant?: ButtonVariant
	onClick?: (e: any) => void
}

export const Button: FC<ButtonProps> = ({ children, variant, onClick }) => {
	return (
		<ButtonStyled onClick={onClick} variant={variant}>
			{children}
		</ButtonStyled>
	)
}
