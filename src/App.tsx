import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import theme from './styles/theme'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { Grid, Box } from '@material-ui/core'
import MenuDashboard from './components/Menu'
import Header from './components/Header'
import Infos from './components/Infos'
import TabsDashboard from './components/Tabs'
import { Provider } from 'react-redux'
import { store } from './store'

const App: React.FC = () => {
  const [showValues, setShowValues] = useState(true)

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Grid container>
            <Grid item xs={12} md={2} lg={1}>
              <MenuDashboard />
            </Grid>
            <Grid item xs={12} md={10} lg={11}>
              <Box>
                <Header setShowValues={setShowValues} showValues={showValues} />
                <Infos showValues={showValues} />
                <TabsDashboard showValues={showValues} />
              </Box>
            </Grid>
          </Grid>
        </Provider>
      </MuiThemeProvider>
    </>
  )
}

export default hot(App)
