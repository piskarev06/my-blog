import React, { FC } from 'react'
import { useRoutes } from 'react-router-dom'

import { HomePage } from '../pages/HomePage/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage'

export const Routes: FC = () => {
	let element = useRoutes([
		{ path: '/', element: <HomePage /> },
		{ path: '*', element: <NotFoundPage /> },
	])

	return element
}
