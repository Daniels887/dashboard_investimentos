import React from 'react'
import Box from '@material-ui/core/Box'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import { SearchOutlined } from '@material-ui/icons'

const Header: React.FC = () => {
  return (
    <>
      <Box boxShadow={3} height="80px" bgcolor="common.white" p={2}>
        <Grid container>
          <Grid item xs={4}>
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
        </Grid>
      </Box>
    </>
  )
}

export default Header
