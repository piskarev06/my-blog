import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { GlobalStyles } from './styles/global'
import { baseTheme } from './styles/themes/baseTheme/baseTheme'
import { Header } from './components/Header/Header'
import { Routes } from './routes/Routes'
import { store } from './store'

export const App: FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter basename="/my-blog">
				<ThemeProvider theme={baseTheme}>
					<Header />
					<Routes />
					<GlobalStyles />
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	)
}
