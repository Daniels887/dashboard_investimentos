import React, { useState } from 'react'
import {
  Tabs,
  Tab,
  Box,
  withStyles,
  Typography,
  useMediaQuery,
  IconButton
} from '@material-ui/core'
import { AccountBalanceWalletOutlined } from '@material-ui/icons'
import TabPanel from '../TabPanel'
import Resume from '../Resume'
import theme from '../../styles/theme'

const MyTab = withStyles({
  root: {
    minWidth: 0,
    textTransform: 'none'
  },
  wrapper: {
    textAlign: 'left',
    display: 'block'
  }
})(Tab)

const MyIcon = withStyles({
  root: {
    color: 'white'
  }
})(AccountBalanceWalletOutlined)

const TabsDashboard: React.FC = () => {
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <Box
        bgcolor="primary.dark"
        color="common.white"
        height={64}
        p={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: { background: 'white', width: '32px', marginLeft: '10px' }
          }}
          scrollButtons="on"
          variant="scrollable"
        >
          <MyTab
            label="Resumo"
            id="simple-tab-0"
            aria-controls="simple-tabpanel-0"
            style={{ marginLeft: matches ? 0 : 8 }}
          />
          <MyTab
            label="Movimentações"
            id="simple-tab-1"
            aria-controls="simple-tabpanel-1"
            style={{ marginLeft: matches ? 16 : 8 }}
          />
          <MyTab
            label="Posição"
            id="simple-tab-2"
            aria-controls="simple-tabpanel-2"
            style={{ marginLeft: matches ? 16 : 8 }}
          />
          <MyTab
            label="Saque"
            id="simple-tab-2"
            aria-controls="simple-tabpanel-3"
            style={{ marginLeft: matches ? 16 : 8 }}
          />
        </Tabs>
        {matches ? (
          <Box mr={5}>
            <Typography>Monte Sua Carteira</Typography>
          </Box>
        ) : (
          <Box>
            <IconButton>
              <MyIcon />
            </IconButton>
          </Box>
        )}
      </Box>
      <Box>
        <TabPanel value={value} index={0}>
          <Resume />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>Item Two</div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div>Item Three</div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div>Item Four</div>
        </TabPanel>
      </Box>
    </>
  )
}

export default TabsDashboard
