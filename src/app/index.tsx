import React from 'react'
import { StatusBar } from 'react-native'

import { ThemeProvider } from 'styled-components'
import Navigation from '@routes'

import { theme } from '@styles/theme'

export default () => (
  <ThemeProvider theme={{ ...theme, mode: 'dark' }}>
    <StatusBar barStyle="light-content" />
    <Navigation />
  </ThemeProvider>
)
