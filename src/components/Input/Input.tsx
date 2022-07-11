import React, { FC } from 'react'
import { InputStyled } from './Input.styled'

interface InputProps {
	placeholder: string
	type: string
}

export const Input: FC<InputProps> = ({ placeholder, type }) => {
	return <InputStyled placeholder={placeholder} type={type} />
}
