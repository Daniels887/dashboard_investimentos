import React from 'react'
import { Box, Typography } from '@material-ui/core'

const Infos: React.FC = () => {
  return (
    <Box m={2} ml={4} display="flex">
      <Box display="flex" flexDirection="column">
        <Typography>
          <Box fontWeight="bold">Saldo em conta corrente</Box>
        </Typography>
        <Typography variant="h5">
          <Box color="grey.600" mt={1}>
            R$ 5.620.080,85
          </Box>
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" ml={4}>
        <Typography>
          <Box fontWeight="bold">Disponível para investir</Box>
        </Typography>
        <Typography variant="h5">
          <Box color="grey.600" mt={1}>
            R$ 10.000.000,00
          </Box>
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" ml={4}>
        <Typography>
          <Box fontWeight="bold">Patrimônio total:</Box>
        </Typography>
        <Typography variant="h5">
          <Box color="grey.600" mt={1}>
            R$ 10.000.000,00
          </Box>
        </Typography>
      </Box>
    </Box>
  )
}

export default Infos
