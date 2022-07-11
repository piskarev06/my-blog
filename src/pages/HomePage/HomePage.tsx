import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getAllPosts } from '../../api'
import { CreatePost } from '../../components/CreatePost/CreatePost'
import { Modal } from '../../components/Modal/Modal'
import { PostList } from '../../components/PostList/PostList'
import { HomeTop, HomeBtn, HomeInput } from './HomePage.styled'
import { getAllPostsAction } from '../../store/posts/postsActions'

export const HomePage: FC = () => {
	const [posts, setPosts] = useState([])
	const [activeModal, setActiveModal] = useState(false)

	const dispatch = useDispatch()

	useEffect(() => {
		getAllPosts().then((data) => {
			dispatch(getAllPostsAction(data))
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
					<CreatePost setActive={setActiveModal} />
				</Modal>
			</div>
		</main>
	)
}
