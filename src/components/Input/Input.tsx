import React, { FC } from 'react'
import { InputStyled } from './Input.styled'

interface InputProps {
	placeholder: string
	type: string
	name: string
	value: string
	onChange: () => void
	onBlur: () => void
}

export const Input: FC<InputProps> = ({ placeholder, type, name, value, onBlur, onChange }) => {
	return (
		<InputStyled
			placeholder={placeholder}
			type={type}
			value={value}
			onBlur={onBlur}
			onChange={onChange}
		/>
	)
}
