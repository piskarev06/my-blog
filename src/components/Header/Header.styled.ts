import styled from 'styled-components'

import { baseTheme } from '../../styles/themes/baseTheme/baseTheme'

export const HeaderStyled = styled.header`
	padding: 25px 0;
`

export const HeaderInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const HeaderLogo = styled.div`
	font-weight: 700;
	font-size: 32px;
	line-height: 38px;

	color: ${baseTheme.colors.black};
`

export const HeaderLink = styled.div`
	font-weight: 600;
	font-size: 20px;
	line-height: 0px;

	color: ${baseTheme.colors.gray};
`
