import React, { FC } from 'react'

import { NotFoundWrapper, NotFoundText } from './NotFoundPage.styled'

export const NotFoundPage: FC = () => {
	return (
		<main>
			<NotFoundWrapper>
				<NotFoundText>not found page</NotFoundText>
			</NotFoundWrapper>
		</main>
	)
}
