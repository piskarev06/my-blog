import React, { FC } from 'react'

import { CreateTitle, CreateInput, CreateInputs, CreateBtn } from './CreatePost.styled'

export const CreatePost: FC = () => {
	return (
		<>
			<CreateTitle>Post</CreateTitle>

			<form>
				<CreateInputs>
					<CreateInput placeholder="Enter title" type="text" />
					<CreateInput placeholder="Enter description" type="text" />
				</CreateInputs>

				<CreateBtn type="submit">Create post</CreateBtn>
			</form>
		</>
	)
}
