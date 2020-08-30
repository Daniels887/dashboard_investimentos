import React from 'react'
import { Menu, MenuItem, Box, Button, Avatar, Badge } from '@material-ui/core'
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
  MenuOutlined,
  PowerSettingsNew,
  NotificationsNone
} from '@material-ui/icons'
import theme from '../../styles/theme'
import { useSelector } from '../../store'

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

const StyledButton = withStyles({
  root: {
    background: theme.palette.primary.contrastText,
    borderRadius: 40,
    border: 0,
    color: 'white',
    height: 48,
    width: '100%'
  }
})(Button)

const MyBadge = withStyles({
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '6px'
  }
})(Badge)

const MenuDashboard: React.FC = () => {
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const user = useSelector((state) => state.user)

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
              justifyContent="space-between"
              color="common.white"
            >
              <Box display="flex" alignItems="center">
                <MyBadge
                  badgeContent=""
                  color="secondary"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  variant="dot"
                >
                  <NotificationsNone />
                </MyBadge>
                <Box ml={3}>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={(e) => handleClick(e)}
                  >
                    <Box
                      color="common.white"
                      display="flex"
                      alignItems="center"
                    >
                      <MenuOutlined />
                    </Box>
                  </Button>
                </Box>
              </Box>
            </Box>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              style={{ width: '100%' }}
            >
              <MenuItem onClick={handleClose}>
                <Box display="flex" alignItems="center">
                  <Avatar
                    style={{
                      background: theme.palette.primary.contrastText
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2">AP</Typography>
                    </Box>
                  </Avatar>
                  <Box fontSize={10} ml={1}>
                    <Box>{user.name}</Box>
                    <Box>{user.cc}</Box>
                  </Box>
                </Box>
              </MenuItem>

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
              <MenuItem onClick={handleClose}>
                <Box display="flex" justifyContent="center" width={1}>
                  <StyledButton>
                    <PowerSettingsNew />
                  </StyledButton>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        </>
      ) : (
        <Box
          height="100%"
          bgcolor="primary.contrastText"
          display="flex"
          flexDirection="column"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="common.white"
            mt={3}
          ></Box>
          <MyBox mt={4}>
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
