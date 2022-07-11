import styled from 'styled-components'

import { baseTheme } from '../../styles/themes/baseTheme/baseTheme'
import { ButtonStyled } from '../../components/Button/Button.styled'

export const PostTitle = styled.h1`
	font-weight: 700;
	font-size: 32px;
	line-height: 38px;

	color: ${baseTheme.colors.black};
	text-align: center;

	margin-bottom: 20px;
`

export const PostInfo = styled.div`
	padding: 25px;

	background: ${baseTheme.colors.bg};
	border-radius: 20px;

	margin-bottom: 10px;
`

export const InfoTitle = styled.h3`
	font-weight: 500;
	font-size: 16px;
	line-height: 0px;

	color: #565d66;
	margin-bottom: 15px;
`

export const InfoDesc = styled.p`
	font-size: 12px;
	line-height: 14px;

	color: ${baseTheme.colors.lightGray};
`

export const PostBtn = styled(ButtonStyled)`
	width: 100%;
`
