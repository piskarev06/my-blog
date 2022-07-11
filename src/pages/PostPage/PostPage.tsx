import React, { FC, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { getPostById } from '../../api'
import { PostType } from '../../store/posts/posts.types'

import { PostTitle, PostInfo, InfoTitle, InfoDesc, PostBtn } from './PostPage.styled'

export const PostPage: FC = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const initialPost: PostType = { id: 'init', title: 'init', description: 'init' }
	const [post, setPost] = useState(initialPost)

	useEffect(() => {
		getPostById(id!).then((data) => {
			console.log(data)

			setPost(data)
		})
	}, [id])

	return (
		<main>
			<div className="container">
				{post.id !== 'init' && (
					<>
						<PostTitle>Post</PostTitle>
						<PostInfo>
							<InfoTitle>{post.title}</InfoTitle>
							<InfoDesc>{post.description}</InfoDesc>
						</PostInfo>
						<PostBtn onClick={() => navigate(-1)}>Go Back</PostBtn>
					</>
				)}
			</div>
		</main>
	)
}
