import React, { FC } from 'react'
import { PaginationStyled } from './Pagination.styled'

interface PaginationProps {
	children: number
	active: boolean
	onClick: () => void
}

export const Pagination: FC<PaginationProps> = ({ children, active, onClick }) => {
	return (
		<PaginationStyled onClick={onClick} active={active}>
			{children}
		</PaginationStyled>
	)
}
