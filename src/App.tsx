import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import MenuDashboard from './components/Menu'
import theme from './styles/theme'

const App: React.FC = () => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container>
          <Grid item xs={12} md={1}>
            <MenuDashboard />
          </Grid>
          <Grid item xs={12} md={11}>
            <Box border={1} height={{ md: '100vh' }}>
              b
            </Box>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </>
  )
}

export default hot(App)
