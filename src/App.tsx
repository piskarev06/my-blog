import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyles } from './styles/global'
import { baseTheme } from './styles/themes/baseTheme/baseTheme'
import { Header } from './components/Header/Header'
import { Routes } from './routes/Routes'

export const App: FC = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={baseTheme}>
				<Header />
				<Routes />
				<GlobalStyles />
			</ThemeProvider>
		</BrowserRouter>
	)
}
