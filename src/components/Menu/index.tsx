import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import Box from '@material-ui/core/Box'
import MenuItem from '@material-ui/core/MenuItem'
import { Typography, useMediaQuery } from '@material-ui/core'
import {
  HomeOutlined,
  AccountBalanceWalletOutlined,
  TrendingUpOutlined,
  PanToolOutlined,
  MonetizationOnOutlined,
  ReceiptOutlined,
  ArrowRightAltOutlined,
  LiveTvOutlined,
  DesktopWindowsOutlined,
  MenuOutlined
} from '@material-ui/icons'
import theme from '../../styles/theme'

const MenuDashboard: React.FC = () => {
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      {!matches ? (
        <>
          <Box
            bgcolor="primary.contrastText"
            p={1}
            pt={1}
            display="flex"
            justifyContent="flex-end"
          >
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => handleClick(e)}
            >
              <MenuOutlined />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              style={{ width: '100%' }}
            >
              <MenuItem onClick={handleClose}>
                <Box color="primary.dark" mr={1}>
                  <HomeOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>Ínicio</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box color="primary.dark" mr={1}>
                  <AccountBalanceWalletOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>Carteira</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box color="primary.dark" mr={1}>
                  <TrendingUpOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>
                  Investimentos
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box color="primary.dark" mr={1}>
                  <PanToolOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>Resgate</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box color="primary.dark" mr={1}>
                  <MonetizationOnOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>Extrato</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box color="primary.dark" mr={1}>
                  <ReceiptOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>Termos</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box color="primary.dark" mr={1}>
                  <ArrowRightAltOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>
                  Trader Cockpit
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box color="primary.dark" mr={1}>
                  <DesktopWindowsOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>
                  Sala ao Vivo
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </>
      ) : (
        <Box
          height={{ sm: '100%', md: '100vh' }}
          bgcolor="primary.contrastText"
          display="flex"
          flexDirection="column"
          p={2}
          pt={5}
        >
          <Box display="flex" alignItems="center" color="grey.400" pt={5}>
            <Box color="primary.dark" mr={1}>
              <HomeOutlined />
            </Box>
            <Typography style={{ fontSize: '12px' }}>Ínicio</Typography>
          </Box>
          <Box display="flex" alignItems="center" color="grey.400" mt={2}>
            <Box color="primary.dark" mr={1}>
              <AccountBalanceWalletOutlined />
            </Box>
            <Typography style={{ fontSize: '12px' }}>Carteira</Typography>
          </Box>
          <Box display="flex" alignItems="center" color="grey.400" mt={2}>
            <Box color="primary.dark" mr={1}>
              <TrendingUpOutlined />
            </Box>
            <Typography style={{ fontSize: '12px' }}>Investimentos</Typography>
          </Box>
          <Box display="flex" alignItems="center" color="grey.400" mt={2}>
            <Box color="primary.dark" mr={1}>
              <PanToolOutlined />
            </Box>
            <Typography style={{ fontSize: '12px' }}>Resgate</Typography>
          </Box>
          <Box display="flex" alignItems="center" color="grey.400" mt={2}>
            <Box color="primary.dark" mr={1}>
              <MonetizationOnOutlined />
            </Box>
            <Typography style={{ fontSize: '12px' }}>Extrato</Typography>
          </Box>
          <Box display="flex" alignItems="center" color="grey.400" mt={2}>
            <Box color="primary.dark" mr={1}>
              <ReceiptOutlined />
            </Box>
            <Typography style={{ fontSize: '12px' }}>Termos</Typography>
          </Box>
          <Box display="flex" alignItems="center" color="grey.400" mt={2}>
            <Box color="primary.dark" mr={1}>
              <ArrowRightAltOutlined />
            </Box>
            <Typography style={{ fontSize: '12px' }}>Trader Cockpit</Typography>
          </Box>
          <Box display="flex" alignItems="center" color="grey.400" mt={2}>
            <Box color="primary.dark" mr={1}>
              <LiveTvOutlined />
            </Box>
            <Typography style={{ fontSize: '12px' }}>Homebroker</Typography>
          </Box>
          <Box display="flex" alignItems="center" color="grey.400" mt={2}>
            <Box color="primary.dark" mr={1}>
              <DesktopWindowsOutlined />
            </Box>
            <Typography style={{ fontSize: '12px' }}>Sala ao Vivo</Typography>
          </Box>
        </Box>
      )}
    </>
  )
}

export default MenuDashboard
