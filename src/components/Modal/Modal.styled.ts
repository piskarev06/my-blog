import styled from 'styled-components'

interface ModalStyledProps {
	active: boolean
}

interface ModalContentProps {
	active: boolean
}

export const ModalStyled = styled.div<ModalStyledProps>`
	position: fixed;

	height: 100vh;
	width: 100%;
	top: 0;
	left: 0;

	background-color: rgba(0, 0, 0, 0.4);

	display: flex;
	justify-content: center;
	align-items: center;

	opacity: 0;
	pointer-events: none;
	transition: 0.5s;

	${(props) =>
		props.active === true &&
		`
        opacity: 1;
        pointer-events: all;
	 `}
`

export const ModalContent = styled.div<ModalContentProps>`
	padding: 20px;

	width: 50%;

	border-radius: 12px;
	background-color: #fff;

	transform: scale(0.5);
	transition: 0.4s all;

	${(props) =>
		props.active === true &&
		`
        transform: scale(1);
	 `}
`
