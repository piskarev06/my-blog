import React, { FC, useEffect, useState } from 'react'

import { getAllPosts } from '../../api'
import { PostList } from '../../components/PostList/PostList'
import { HomeTop, HomeBtn, HomeInput } from './HomePage.styled'

export const HomePage: FC = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		getAllPosts().then((data) => {
			setPosts(data)
		})
	}, [])

	return (
		<main>
			<div className="container">
				<HomeTop>
					<HomeInput placeholder="Search by title" />
					<HomeBtn>Create post</HomeBtn>
				</HomeTop>

				<PostList posts={posts} />
			</div>
		</main>
	)
}
