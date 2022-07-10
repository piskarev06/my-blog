import styled from 'styled-components'

import { baseTheme } from '../../styles/themes/baseTheme/baseTheme'

export const NotFoundWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 105px);
`

export const NotFoundText = styled.h1`
	font-weight: 700;
	font-size: 48px;
	line-height: 56px;

	color: ${baseTheme.colors.black};
`
