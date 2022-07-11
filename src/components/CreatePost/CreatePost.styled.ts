import styled from 'styled-components'

import { baseTheme } from '../../styles/themes/baseTheme/baseTheme'
import { InputStyled } from '../Input/Input.styled'
import { ButtonStyled } from '../Button/Button.styled'

export const CreateTitle = styled.h2`
	font-weight: 700;
	font-size: 32px;
	line-height: 38px;

	color: ${baseTheme.colors.black};
	text-align: center;

	margin-bottom: 30px;
`

export const CreateInput = styled(InputStyled)`
	width: 100%;
`

export const CreateInputs = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;

	margin-bottom: 30px;
`

export const CreateBtn = styled(ButtonStyled)`
	width: 100%;
`
