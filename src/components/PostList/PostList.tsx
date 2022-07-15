import React, { FC } from 'react'

import { PostType } from '../../store/posts/posts.types'
import { Post } from '../Post/Post'
import { PostListStyled, PostListWarning } from './PostList.styled'

interface PostListProps {
	posts: PostType[]
	handlerActive: (post: PostType) => void
}

export const PostList: FC<PostListProps> = ({ posts, handlerActive }) => {
	return (
		<PostListStyled>
			{posts.length > 0 ? (
				posts.map((el) => {
					return (
						<Post
							key={el.id}
							id={el.id}
							title={el.title}
							description={el.description}
							handlerActive={handlerActive}
						/>
					)
				})
			) : (
				<PostListWarning>Please, create a post</PostListWarning>
			)}
		</PostListStyled>
	)
}
