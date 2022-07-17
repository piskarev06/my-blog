import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllPosts } from '../../api'
import { CreatePost } from '../../components/CreatePost/CreatePost'
import { Modal } from '../../components/Modal/Modal'
import { PostList } from '../../components/PostList/PostList'
import { HomeTop, HomeBtn, HomeInput } from './HomePage.styled'
import { getAllPostsAction } from '../../store/posts/postsActions'
import { selectVisiblePosts } from '../../store/posts/postsSelectors'
import { EditPost } from '../../components/EditPost/EditPost'
import { PostType } from '../../store/posts/posts.types'
import { addSearchAction } from '../../store/search/searchActions'
import { getPageCount, getPagesArray } from '../../utils/pages'
import { PaginationList } from '../../components/PaginationList/PaginationList'

export const HomePage: FC = () => {
	const [activeModal, setActiveModal] = useState<boolean>(false)
	const [activeModalEdit, setActiveModalEdit] = useState<boolean>(false)
	const [currentPost, setCurrentPost] = useState<PostType>()
	const [totalPages, setTotalPages] = useState<number>(0)
	const [limit, setLimit] = useState<number>(4)
	const [page, setPage] = useState<number>(1)
	const pagesArray = getPagesArray(totalPages)

	const dispatch = useDispatch()
	const posts = useSelector(selectVisiblePosts)

	const handlerActive = (post: PostType) => {
		setActiveModalEdit(true)

		setCurrentPost(post)
	}

	const handlerSearch = (e: any) => {
		dispatch(addSearchAction(e.target.value))
	}

	useEffect(() => {
		getAllPosts(limit, page).then((data) => {
			dispatch(getAllPostsAction(data.data))

			const totalCount = +data.headers['x-total-count']
			setTotalPages(getPageCount(totalCount, limit))
		})
	}, [dispatch, page])

	return (
		<main>
			<div className="container">
				<HomeTop>
					<HomeInput onChange={(e) => handlerSearch(e)} placeholder="Search by title" />
					<HomeBtn onClick={() => setActiveModal(true)}>Create post</HomeBtn>
				</HomeTop>

				<PostList posts={posts} handlerActive={handlerActive} />

				<PaginationList setPage={setPage} pagesArray={pagesArray} page={page} />

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
