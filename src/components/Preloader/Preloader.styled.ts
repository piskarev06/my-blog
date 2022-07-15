import styled from 'styled-components'

import { baseTheme } from '../../styles/themes/baseTheme/baseTheme'

export const PreloaderStyled = styled.div`
	display: inline-block;
	width: 40px;
	height: 40px;

	&:after 
		content: ' ';
		display: block;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		border: 3px solid ${baseTheme.colors.lightGray};
		border-color: ${baseTheme.colors.lightGray} transparent ${baseTheme.colors.lightGray} transparent;
		animation: lds-dual-ring 1.2s linear infinite;

	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
