import React, { Dispatch, SetStateAction, useEffect } from 'react'
import {
  Box,
  InputBase,
  IconButton,
  Grid,
  withStyles,
  Badge,
  Avatar,
  Typography,
  Button,
  useMediaQuery
} from '@material-ui/core'
import {
  SearchOutlined,
  MonetizationOn,
  NotificationsNone,
  PowerSettingsNew
} from '@material-ui/icons'
import theme from '../../styles/theme'

const MyIcon = withStyles({
  root: {
    color: theme.palette.grey[400]
  }
})(MonetizationOn)

const MyBadge = withStyles({
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '6px'
  }
})(Badge)

const StyledButton = withStyles({
  root: {
    background: theme.palette.primary.contrastText,
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    borderTopRightRadus: 0,
    borderBottomRightRadius: 0,
    border: 0,
    color: 'white',
    height: 48,
    width: 64
  }
})(Button)

interface IProps {
  setShowValues: Dispatch<SetStateAction<boolean>>
  showValues: boolean
}

const Header: React.FC<IProps> = ({ setShowValues, showValues }) => {
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      <Box
        boxShadow={3}
        height={{ xs: '100%', md: '80px' }}
        bgcolor="common.white"
        p={2}
        display="flex"
        position="relative"
      >
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box
              borderRadius={32}
              bgcolor="grey.50"
              pl={3}
              pr={1}
              display="flex"
              justifyContent="space-between"
            >
              <InputBase
                placeholder="O que você procura?"
                inputProps={{ 'aria-label': 'o que você procura?' }}
                fullWidth
              />
              <IconButton type="submit" aria-label="search" color="primary">
                <SearchOutlined />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={1} md={4}></Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="baseline">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width={{ xs: 1, md: 0.8 }}
              >
                <Box
                  bgcolor="common.white"
                  boxShadow={1}
                  borderRadius={32}
                  color="grey.400"
                  mt={{ xs: 3, md: 0 }}
                  width={{ xs: '100%', md: '220px' }}
                >
                  <Box
                    color="grey.400"
                    display="flex"
                    alignItems="center"
                    justifyContent={{ xs: 'space-between', md: 'start' }}
                    pl={3}
                  >
                    ESCONDER VALORES
                    <IconButton onClick={() => setShowValues(!showValues)}>
                      <MyIcon />
                    </IconButton>
                  </Box>
                </Box>
                {matches && (
                  <>
                    <Box>
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
                    </Box>
                    <Box display="flex" alignItems="baseline">
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
                  </>
                )}
              </Box>
              {matches && (
                <Box css={{ position: 'absolute', right: 0 }}>
                  <StyledButton>
                    <PowerSettingsNew />
                  </StyledButton>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Header
