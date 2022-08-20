import type { AppProps as NextAppProps } from 'next/app'
import { Provider } from 'react-redux'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import { store } from '@app'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { createEmotionCache, lightThemeOptions } from '@services/theme'
type AppProps = NextAppProps & {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()
const lightTheme = createTheme(lightThemeOptions)

const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <CssBaseline />
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
