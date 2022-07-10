import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { HeaderStyled, HeaderInner, HeaderLogo, HeaderLink } from './Header.styled'

export const Header: FC = () => {
	return (
		<HeaderStyled>
			<div className="container">
				<HeaderInner>
					<HeaderLogo>
						<Link to="/">MyBlog</Link>
					</HeaderLogo>
					<HeaderLink>
						<Link to="/">Posts</Link>
					</HeaderLink>
				</HeaderInner>
			</div>
		</HeaderStyled>
	)
}
