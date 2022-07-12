import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

import { editPost } from '../../api'
import { useInput } from '../../hooks/useInput'
import {
	CreateTitle,
	CreateInput,
	CreateInputs,
	CreateBtn,
	CreateError,
} from '../CreatePost/CreatePost.styled'
import { editPostAction } from '../../store/posts/postsActions'
import { PostType } from '../../store/posts/posts.types'

interface EditPostProps {
	currentPost: PostType
	setActive: (cond: boolean) => void
}
export const EditPost: FC<EditPostProps> = ({ currentPost, setActive }) => {
	const dispatch = useDispatch()

	const title = useInput(currentPost.title, {
		isEmpty: true,
		maxLenght: 12,
	})
	const desc = useInput(currentPost.description, {
		isEmpty: true,
		maxLenght: 25,
	})

	type TitleType = typeof title
	type DescType = typeof desc

	const onSubmit = (e: any, title: TitleType, desc: DescType) => {
		e.preventDefault()

		let post = { id: currentPost.id, title: title.value, description: desc.value }
		editPost(post)

		dispatch(editPostAction(post))

		setActive(false)

		title.setValue('')
		title.setIsDerty(false)
		desc.setValue('')
		desc.setIsDerty(false)
	}

	return (
		<>
			<CreateTitle>Edit post</CreateTitle>

			<form onSubmit={(e) => onSubmit(e, title, desc)}>
				<CreateInputs>
					{title.isDerty && title.isEmpty && <CreateError>Title must not be empty</CreateError>}
					{title.isDerty && title.maxLenght && (
						<CreateError>Title must not be longer than 12 characters</CreateError>
					)}
					<CreateInput
						onChange={(e) => title.onChange(e)}
						onBlur={(e) => title.onBlur(e)}
						value={title.value}
						name="title"
						placeholder="Enter title"
						type="text"
					/>
					{desc.isDerty && desc.isEmpty && <CreateError>Description must not be empty</CreateError>}
					{desc.isDerty && desc.maxLenght && (
						<CreateError>Description must not be longer than 25 characters</CreateError>
					)}
					<CreateInput
						onChange={(e) => desc.onChange(e)}
						onBlur={(e) => desc.onBlur(e)}
						value={desc.value}
						name="desc"
						placeholder="Enter description"
						type="text"
					/>
				</CreateInputs>

				<CreateBtn
					disabled={desc.isEmpty || desc.maxLenght || title.isEmpty || title.maxLenght}
					type="submit"
				>
					Edit post
				</CreateBtn>
			</form>
		</>
	)
}
