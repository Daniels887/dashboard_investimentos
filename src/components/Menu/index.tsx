import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import Box from '@material-ui/core/Box'
import MenuItem from '@material-ui/core/MenuItem'
import { Typography, useMediaQuery, withStyles } from '@material-ui/core'
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

const MyMenuItem = withStyles({
  root: {
    '&:hover': {
      backgroundColor: 'rgba(1, 153,254, 0.3) !important',
      color: 'white !important'
    }
  }
})(MenuItem)

const MyBox = withStyles({
  root: {
    color: theme.palette.grey[400],
    '&:hover': {
      color: 'white !important'
    }
  }
})(Box)

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
          <Box bgcolor="primary.contrastText" p={1} pt={1} color="grey.400">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="common.white"
            >
              <Typography variant="h5">genial</Typography>
            </Box>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => handleClick(e)}
            >
              <Box color="common.white" display="flex" alignItems="center">
                <MenuOutlined />
              </Box>
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
                <Box color="primary.main" mr={1}>
                  <HomeOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>Ínicio</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box color="primary.main" mr={1}>
                  <AccountBalanceWalletOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>Carteira</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box color="primary.main" mr={1}>
                  <TrendingUpOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>
                  Investimentos
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box color="primary.main" mr={1}>
                  <PanToolOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>Resgate</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box color="primary.main" mr={1}>
                  <MonetizationOnOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>Extrato</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box color="primary.main" mr={1}>
                  <ReceiptOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>Termos</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box color="primary.main" mr={1}>
                  <ArrowRightAltOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>
                  Trader Cockpit
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box color="primary.main" mr={1}>
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
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="common.white"
            mt={2}
          >
            <Typography variant="h5">genial</Typography>
          </Box>
          <MyBox mt={3}>
            <MyMenuItem>
              <Box display="flex" alignItems="center" mt={1}>
                <Box color="primary.main" mr={1}>
                  <HomeOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>Ínicio</Typography>
              </Box>
            </MyMenuItem>
          </MyBox>
          <MyBox>
            <MyMenuItem>
              <Box display="flex" alignItems="center" mt={1}>
                <Box color="primary.main" mr={1}>
                  <AccountBalanceWalletOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>Carteira</Typography>
              </Box>
            </MyMenuItem>
          </MyBox>
          <MyBox>
            <MyMenuItem>
              <Box display="flex" alignItems="center" mt={1}>
                <Box color="primary.main" mr={1}>
                  <TrendingUpOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>
                  Investimentos
                </Typography>
              </Box>
            </MyMenuItem>
          </MyBox>
          <MyBox>
            <MyMenuItem classes={{}}>
              <Box display="flex" alignItems="center" mt={1}>
                <Box color="primary.main" mr={1}>
                  <PanToolOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>Resgate</Typography>
              </Box>
            </MyMenuItem>
          </MyBox>
          <MyBox>
            <MyMenuItem>
              <Box display="flex" alignItems="center" mt={1}>
                <Box color="primary.main" mr={1}>
                  <MonetizationOnOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>Extrato</Typography>
              </Box>
            </MyMenuItem>
          </MyBox>
          <MyBox>
            <MyMenuItem>
              <Box display="flex" alignItems="center" mt={1}>
                <Box color="primary.main" mr={1}>
                  <ReceiptOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>Termos</Typography>
              </Box>
            </MyMenuItem>
          </MyBox>
          <MyBox>
            <MyMenuItem>
              <Box display="flex" alignItems="center" mt={1}>
                <Box color="primary.main" mr={1}>
                  <ArrowRightAltOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>
                  Trader Cockpit
                </Typography>
              </Box>
            </MyMenuItem>
          </MyBox>
          <MyBox>
            <MyMenuItem>
              <Box display="flex" alignItems="center" mt={1}>
                <Box color="primary.main" mr={1}>
                  <LiveTvOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>Homebroker</Typography>
              </Box>
            </MyMenuItem>
          </MyBox>
          <MyBox>
            <MyMenuItem>
              <Box display="flex" alignItems="center" mt={1}>
                <Box color="primary.main" mr={1}>
                  <DesktopWindowsOutlined />
                </Box>
                <Typography style={{ fontSize: '12px' }}>
                  Sala ao Vivo
                </Typography>
              </Box>
            </MyMenuItem>
          </MyBox>
        </Box>
      )}
    </>
  )
}

export default MenuDashboard
