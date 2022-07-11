import React, { FC } from 'react'
import { Post } from '../Post/Post'
import { PostListStyled } from './PostList.styled'

interface PostListProps {
	posts: any[]
}

export const PostList: FC<PostListProps> = ({ posts }) => {
	return (
		<PostListStyled>
			{posts &&
				posts.map((el) => {
					return <Post key={el.id} id={el.id} title={el.title} description={el.description} />
				})}
		</PostListStyled>
	)
}
