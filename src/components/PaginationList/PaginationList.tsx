import React, { FC } from 'react'

import { Pagination } from '../Pagination/Pagination'
import { PaginationListStyled } from './PaginationList.styled'

interface PaginationListProps {
	pagesArray: number[]
	page: number
	setPage: (page: number) => void
}

export const PaginationList: FC<PaginationListProps> = ({ pagesArray, page, setPage }) => {
	return (
		<PaginationListStyled>
			{pagesArray.map((el) => {
				return (
					<Pagination onClick={() => setPage(el)} active={el === page}>
						{el}
					</Pagination>
				)
			})}
		</PaginationListStyled>
	)
}
