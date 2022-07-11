import React, { FC } from 'react'

import { ModalStyled, ModalContent } from './Modal.styled'

interface ModalProps {
	children: any
	active: boolean
	setActive: (cond: boolean) => void
}

export const Modal: FC<ModalProps> = ({ active, setActive, children }) => {
	return (
		<ModalStyled active={active} onClick={() => setActive(false)}>
			<ModalContent active={active} onClick={(e) => e.stopPropagation()}>
				{children}
			</ModalContent>
		</ModalStyled>
	)
}
