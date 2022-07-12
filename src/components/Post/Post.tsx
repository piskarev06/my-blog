import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Button } from '../Button/Button'
import { PostDesc, PostRight, PostStyled, PostTitle } from './Post.styled'
import { deletePostAction } from '../../store/posts/postsActions'
import { deletePost } from '../../api'

interface PostProps {
	id: string
	title: string
	description: string
}

export const Post: FC<PostProps> = ({ id, title, description }) => {
	const dispatch = useDispatch()

	const handlerDelete = (e: any, id: string) => {
		e.preventDefault()

		deletePost(id)
		dispatch(deletePostAction(id))
	}

	return (
		<Link to={`/posts/${id}`}>
			<PostStyled>
				<div className="post__left">
					<PostTitle>{title}</PostTitle>
					<PostDesc>{description}</PostDesc>
				</div>

				<PostRight>
					<Button onClick={(e) => e.preventDefault()}>Edit</Button>
					<Button onClick={(e) => handlerDelete(e, id)} variant="delete">
						Delete
					</Button>
				</PostRight>
			</PostStyled>
		</Link>
	)
}
