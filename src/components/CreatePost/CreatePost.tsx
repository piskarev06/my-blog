import React, { FC } from 'react'

import { useInput } from '../../hooks/useInput'
import { CreateTitle, CreateInput, CreateInputs, CreateBtn, CreateError } from './CreatePost.styled'

interface CreatePostProps {
	setActive: (cond: boolean) => void
}
export const CreatePost: FC<CreatePostProps> = ({ setActive }) => {
	const title = useInput('', { isEmpty: true, maxLenght: 12 })
	const desc = useInput('', { isEmpty: true, maxLenght: 25 })
	type TitleType = typeof title
	type DescType = typeof desc

	const onSubmit = (e: any, title: TitleType, desc: DescType) => {
		e.preventDefault()
		console.log(title.value, desc.value)

		setActive(false)

		title.setValue('')
		title.setIsDerty(false)
		desc.setValue('')
		desc.setIsDerty(false)
	}

	return (
		<>
			<CreateTitle>Post</CreateTitle>

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
					Create post
				</CreateBtn>
			</form>
		</>
	)
}
