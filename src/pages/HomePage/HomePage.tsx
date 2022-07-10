import React, { FC } from 'react'

import { HomeTop, HomeBtn } from './HomePage.styled'

export const HomePage: FC = () => {
	return (
		<main>
			<div className="container">
				<HomeTop>
					<div className="home__search">Search by title</div>
					<HomeBtn>Create post</HomeBtn>
				</HomeTop>
			</div>
		</main>
	)
}
