import React, { FC, useEffect, useState } from 'react'

import { getAllPosts } from '../../api'
import { Modal } from '../../components/Modal/Modal'
import { PostList } from '../../components/PostList/PostList'
import { HomeTop, HomeBtn, HomeInput } from './HomePage.styled'

export const HomePage: FC = () => {
	const [posts, setPosts] = useState([])
	const [activeModal, setActiveModal] = useState(false)

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
					<HomeBtn onClick={() => setActiveModal(true)}>Create post</HomeBtn>
				</HomeTop>

				<PostList posts={posts} />

				<Modal active={activeModal} setActive={setActiveModal}>
					test
				</Modal>
			</div>
		</main>
	)
}
