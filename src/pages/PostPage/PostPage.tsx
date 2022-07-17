import React, { FC, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { getPostById } from '../../api'
import { Preloader } from '../../components/Preloader/Preloader'
import { PostType } from '../../store/posts/posts.types'

import { PostTitle, PostInfo, InfoTitle, InfoDesc, PostBtn } from './PostPage.styled'

export const PostPage: FC = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const [post, setPost] = useState<PostType>()

	useEffect(() => {
		getPostById(id!).then((data) => {
			setPost(data.data)
		})
	}, [id])

	return (
		<main>
			<div className="container">
				{post ? (
					<>
						<PostTitle>Post</PostTitle>
						<PostInfo>
							<InfoTitle>{post.title}</InfoTitle>
							<InfoDesc>{post.description}</InfoDesc>
						</PostInfo>
						<PostBtn onClick={() => navigate(-1)}>Go Back</PostBtn>
					</>
				) : (
					<Preloader />
				)}
			</div>
		</main>
	)
}
