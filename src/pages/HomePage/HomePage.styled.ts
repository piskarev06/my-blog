import styled from 'styled-components'

import { baseTheme } from '../../styles/themes/baseTheme/baseTheme'
import { ButtonStyled } from '../../components/Button/Button.styled'

export const HomeTop = styled.div`
	max-height: 50px;

	display: flex;
	gap: 34px;

	margin-bottom: 45px;

	@media (max-width: 600px) {
		gap: 20px;

		margin-bottom: 30px;
	}
	@media (max-width: 480px) {
		gap: 10px;
	}
`

export const HomeBtn = styled(ButtonStyled)`
	max-width: 202px;
	width: 100%;

	font-weight: 600;
	font-size: 18px;
	line-height: 0px;

	@media (max-width: 600px) {
		max-width: 170px;
	}
	@media (max-width: 480px) {
		max-width: 140px;

		font-size: 16px;
	}
`

export const HomeInput = styled.input`
	max-width: 511px;
	width: 100%;
	padding: 25px;

	font-weight: 400;
	font-size: 16px;

	color: #818c99;
	border: 1px solid ${baseTheme.colors.gray};
	border-radius: 15px;

	@media (max-width: 600px) {
		padding: 15px;
	}
`
