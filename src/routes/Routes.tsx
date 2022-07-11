import React, { FC } from 'react'
import { useRoutes } from 'react-router-dom'

import { HomePage } from '../pages/HomePage/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage'
import { PostPage } from '../pages/PostPage/PostPage'

export const Routes: FC = () => {
	let element = useRoutes([
		{ path: '/', element: <HomePage /> },
		{ path: '/posts/:id', element: <PostPage /> },
		{ path: '*', element: <NotFoundPage /> },
	])

	return element
}
