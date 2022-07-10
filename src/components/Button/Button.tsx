import React, { FC } from 'react'

import type { ButtonVariant } from './Button.types'
import { ButtonStyled } from './Button.styled'

interface ButtonProps {
	children: string
	variant?: ButtonVariant
}

export const Button: FC<ButtonProps> = ({ children }) => {
	return <ButtonStyled>{children}</ButtonStyled>
}
