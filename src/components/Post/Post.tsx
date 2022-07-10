import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'

import { PostDesc, PostRight, PostStyled, PostTitle } from './Post.styled'

interface PostProps {
	id: string
	title: string
	description: string
}

export const Post: FC<PostProps> = ({ id, title, description }) => {
	return (
		<Link to={`/${id}`}>
			<PostStyled>
				<div className="post__left">
					<PostTitle>{title}</PostTitle>
					<PostDesc>{description}</PostDesc>
				</div>

				<PostRight>
					<Button>Edit</Button>
					<Button variant="delete">Delete</Button>
				</PostRight>
			</PostStyled>
		</Link>
	)
}
