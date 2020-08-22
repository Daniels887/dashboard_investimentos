import React from 'react'
import { hot } from 'react-hot-loader/root'
import theme from './styles/theme'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import MenuDashboard from './components/Menu'
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container>
          <Grid item xs={12} md={2} lg={1}>
            <MenuDashboard />
          </Grid>
          <Grid item xs={12} md={10} lg={11}>
            <Box height={{ md: '100vh' }}>
              <Header />
            </Box>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </>
  )
}

export default hot(App)
