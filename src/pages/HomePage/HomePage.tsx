import React, { FC } from 'react'
import { Post } from '../../components/Post/Post'

import { HomeTop, HomeBtn, HomeInput } from './HomePage.styled'

export const HomePage: FC = () => {
	return (
		<main>
			<div className="container">
				<HomeTop>
					<HomeInput placeholder="Search by title" />
					<HomeBtn>Create post</HomeBtn>
				</HomeTop>

				<Post id={'sas'} title={'sasas'} description={'sdsdsdsd'}></Post>
			</div>
		</main>
	)
}
