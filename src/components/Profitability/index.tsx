import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core'
import theme from '../../styles/theme'

const Profitability: React.FC = () => {
  return (
    <Box width={1} p={4}>
      <Paper elevation={3}>
        <Box
          p={3}
          pl={{ xs: 3, md: 4 }}
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-end' }}
        >
          <Box
            width={{ xs: 1, md: 0.2 }}
            color="grey.500"
            flexWrap="wrap"
            mr={{ xs: 2, md: 0 }}
            textAlign="center"
          >
            <Typography style={{ fontWeight: 'bold' }}>
              Rentabilidade na carteira
            </Typography>
            <Typography style={{ fontSize: 12 }}>Versão Beta</Typography>
          </Box>
          <Box
            color="grey.600"
            ml={{ xs: 0, md: 5 }}
            textAlign="center"
            mt={{ xs: 1, md: 0 }}
          >
            <Typography style={{ fontWeight: 'bold' }}>no mês</Typography>
            <Typography style={{ color: '#32CD32', fontWeight: 'bold' }}>
              + 0,50%
            </Typography>
          </Box>
          <Box
            color="grey.600"
            ml={{ xs: 0, md: 5 }}
            textAlign="center"
            mt={{ xs: 1, md: 0 }}
          >
            <Typography style={{ fontWeight: 'bold' }}>no ano</Typography>
            <Typography
              style={{
                color: theme.palette.secondary.main,
                fontWeight: 'bold'
              }}
            >
              - 9,75%
            </Typography>
          </Box>
          <Box
            color="grey.600"
            ml={{ xs: 0, md: 5 }}
            textAlign="center"
            mt={{ xs: 1, md: 0 }}
          >
            <Typography style={{ fontWeight: 'bold' }}>12 meses</Typography>
            <Typography
              style={{
                color: theme.palette.secondary.main,
                fontWeight: 'bold'
              }}
            >
              - 5,42%
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default Profitability
