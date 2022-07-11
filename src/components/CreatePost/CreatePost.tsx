import React, { FC } from 'react'
import { useInput } from '../../hooks/useInput'

import { CreateTitle, CreateInput, CreateInputs, CreateBtn, CreateError } from './CreatePost.styled'

export const CreatePost: FC = () => {
	const title = useInput('', { isEmpty: true, maxLenght: 12 })
	const desc = useInput('', { isEmpty: true, maxLenght: 25 })

	return (
		<>
			<CreateTitle>Post</CreateTitle>

			<form>
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

				<CreateBtn type="submit">Create post</CreateBtn>
			</form>
		</>
	)
}
