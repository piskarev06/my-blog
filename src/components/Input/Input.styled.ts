import styled from 'styled-components'

import { baseTheme } from '../../styles/themes/baseTheme/baseTheme'

export const InputStyled = styled.input`
	padding: 25px;
	max-height: 50px;

	line-height: 0px;

	color: #818c99;
	border: 1px solid ${baseTheme.colors.lightGray};
	border-radius: 15px;

	@media (max-width: 600px) {
		padding: 15px;
	}
`
