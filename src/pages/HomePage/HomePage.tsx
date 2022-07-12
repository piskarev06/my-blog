import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllPosts } from '../../api'
import { CreatePost } from '../../components/CreatePost/CreatePost'
import { Modal } from '../../components/Modal/Modal'
import { PostList } from '../../components/PostList/PostList'
import { HomeTop, HomeBtn, HomeInput } from './HomePage.styled'
import { getAllPostsAction } from '../../store/posts/postsActions'
import { selectAllPosts } from '../../store/posts/postsSelectors'
import { EditPost } from '../../components/EditPost/EditPost'
import { PostType } from '../../store/posts/posts.types'

export const HomePage: FC = () => {
	const [activeModal, setActiveModal] = useState(false)
	const [activeModalEdit, setActiveModalEdit] = useState(false)
	const [currentPost, setCurrentPost] = useState<PostType>()

	const dispatch = useDispatch()
	const posts = useSelector(selectAllPosts)

	const handlerActive = (post: PostType) => {
		setActiveModalEdit(true)
		console.log(post)

		setCurrentPost(post)
		console.log(currentPost)
	}

	useEffect(() => {
		getAllPosts().then((data) => {
			dispatch(getAllPostsAction(data))
		})
	}, [dispatch])

	return (
		<main>
			<div className="container">
				<HomeTop>
					<HomeInput placeholder="Search by title" />
					<HomeBtn onClick={() => setActiveModal(true)}>Create post</HomeBtn>
				</HomeTop>

				<PostList posts={posts} handlerActive={handlerActive} />

				<Modal active={activeModal} setActive={setActiveModal}>
					<CreatePost setActive={setActiveModal} />
				</Modal>

				<Modal active={activeModalEdit} setActive={setActiveModalEdit}>
					{activeModalEdit && (
						<EditPost currentPost={currentPost!} setActive={setActiveModalEdit} />
					)}
				</Modal>
			</div>
		</main>
	)
}
