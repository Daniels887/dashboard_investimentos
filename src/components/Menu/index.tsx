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
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAAA8CAMAAACkeiORAAAA/1BMVEUAAAD+/v7////+/v7////////////////8/v/+/v7+/v7////////////+/v7////+/v7////+/v7+/v7////+///////////////////9/v/+///+/v7////////////////////////+/v7////////////////////////+///+/v7////////////+/v7+/v7///////////////////////////////////////////////////////////////////////////////9Intf///+52vCDveRlrd6Nw+aUxui42fDM5PVXptpust+o0ez+/v5Jntc+mdVGndfi3k+FAAAAUXRSTlMA943uk8drwyX9+gSiFvRW14Pc5y4aAkI+KCAS8MtTBodIO+G1sXoddzgN0pgzK+vkv7qoYxAIXk9/Wwswb0ytZp2QRXLpfFGlvIR6TjLbrmSUr2nYAAAHvUlEQVRo3uzU7VLaQBSA4QOChE+DIVFAEUUSUFNAAQMURKEfam17hPu/libZBHY3CwP94TCdPr8cZiVvdg8Lq7x88T0X4cNNM4rSkGGF37N33+wHfLgw2kKwwi8q7ht8uPVxL7O5bUfjOs9O2Xy+k3GQLEiS9PZzvpNxxPfZ/7h/NW4n7jl10q7p+1Y+CQuvs/f57I1eMq7pwwPzClj5nq73hgMAMEbTbLnWNwfAKGV1PVsCjiadj6fD9ijnrE6Oe/aauiguPYxl0BWXw5/Ac/U8m7+CpzhuZZBQHqwzoOyjLSFBvxVConJjAiWKthgwpOx1wntk824ExQbaIsG4s1oDKYmUAURSUv2/9hWkySU+LnMfRUo8pa6LUx9DSItaijhOOkXO3gGwjBbyUgM2Lp5AVrO+Oq7UQE4iLowzFQzSgZarYFCrQ8WJnNRXxekoIIorNJHH10mLJQ1ZrmTQc6kJ4hINZXFgh2lxXG15+JnQujjNP7BMdWqd98PX6CmBrxv1DvvpopjUusYoFfJegI+LX5YKxY5xFPZO7UYYV/LfNGLljYLZriaEccu3SIRVcGkj2RsZFTw9dFVV8OVjpLbAxikj8KSr6AjlBXFq0wspgifXEscV9sh4TGBhcEcvXCy5AUr3Fh1lJm7PhAXtEh1ZQVyEbPI9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"
                alt="Genial"
                width="80px"
              />
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
                    <Box>Andreia</Box>
                    <Box>CC 16289-9</Box>
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
          height={{ md: 1, lg: '100vh' }}
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
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAAA8CAMAAACkeiORAAAA/1BMVEUAAAD+/v7////+/v7////////////////8/v/+/v7+/v7////////////+/v7////+/v7////+/v7+/v7////+///////////////////9/v/+///+/v7////////////////////////+/v7////////////////////////+///+/v7////////////+/v7+/v7///////////////////////////////////////////////////////////////////////////////9Intf///+52vCDveRlrd6Nw+aUxui42fDM5PVXptpust+o0ez+/v5Jntc+mdVGndfi3k+FAAAAUXRSTlMA943uk8drwyX9+gSiFvRW14Pc5y4aAkI+KCAS8MtTBodIO+G1sXoddzgN0pgzK+vkv7qoYxAIXk9/Wwswb0ytZp2QRXLpfFGlvIR6TjLbrmSUr2nYAAAHvUlEQVRo3uzU7VLaQBSA4QOChE+DIVFAEUUSUFNAAQMURKEfam17hPu/libZBHY3CwP94TCdPr8cZiVvdg8Lq7x88T0X4cNNM4rSkGGF37N33+wHfLgw2kKwwi8q7ht8uPVxL7O5bUfjOs9O2Xy+k3GQLEiS9PZzvpNxxPfZ/7h/NW4n7jl10q7p+1Y+CQuvs/f57I1eMq7pwwPzClj5nq73hgMAMEbTbLnWNwfAKGV1PVsCjiadj6fD9ijnrE6Oe/aauiguPYxl0BWXw5/Ac/U8m7+CpzhuZZBQHqwzoOyjLSFBvxVConJjAiWKthgwpOx1wntk824ExQbaIsG4s1oDKYmUAURSUv2/9hWkySU+LnMfRUo8pa6LUx9DSItaijhOOkXO3gGwjBbyUgM2Lp5AVrO+Oq7UQE4iLowzFQzSgZarYFCrQ8WJnNRXxekoIIorNJHH10mLJQ1ZrmTQc6kJ4hINZXFgh2lxXG15+JnQujjNP7BMdWqd98PX6CmBrxv1DvvpopjUusYoFfJegI+LX5YKxY5xFPZO7UYYV/LfNGLljYLZriaEccu3SIRVcGkj2RsZFTw9dFVV8OVjpLbAxikj8KSr6AjlBXFq0wspgifXEscV9sh4TGBhcEcvXCy5AUr3Fh1lJm7PhAXtEh1ZQVyEbPI9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"
              alt="Genial"
              width="80px"
            />
          </Box>
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
