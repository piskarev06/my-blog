import styled from 'styled-components'

import { baseTheme } from '../../styles/themes/baseTheme/baseTheme'

export const InputStyled = styled.input`
	padding: 25px;
	height: 50px;

	line-height: 0px;

	color: #818c99;
	border: 1px solid ${baseTheme.colors.lightGray};
	border-radius: 15px;
`
