import React from 'react'

import { ThemeProvider } from 'styled-components'
import Navigation from '@routes'

import { theme } from '@styles/theme'

export default () => (
  <ThemeProvider theme={{ ...theme, mode: 'light' }}>
    <Navigation />
  </ThemeProvider>
)
