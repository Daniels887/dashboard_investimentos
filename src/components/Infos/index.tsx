import React from 'react'
import { Box, Typography, Grid } from '@material-ui/core'

const Infos: React.FC = () => {
  return (
    <Box m={2} ml={{ xs: 0, md: 4 }} textAlign={{ xs: 'center', md: 'left' }}>
      <Grid container>
        <Grid item xs={12} md={2}>
          <Box display="flex" flexDirection="column" mt={{ xs: 2, md: 0 }}>
            <Typography style={{ fontWeight: 'bold' }}>
              Saldo em conta corrente
            </Typography>
            <Box color="grey.600" mt={1}>
              <Typography variant="h5">R$ 5.620.080,85</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box display="flex" flexDirection="column" mt={{ xs: 2, md: 0 }}>
            <Typography style={{ fontWeight: 'bold' }}>
              Disponível para investir
            </Typography>
            <Box color="grey.600" mt={1}>
              <Typography variant="h5">R$ 10.000.000,00</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box display="flex" flexDirection="column" mt={{ xs: 2, md: 0 }}>
            <Typography style={{ fontWeight: 'bold' }}>
              Patrimônio total:
            </Typography>
            <Box color="grey.600" mt={1}>
              <Typography variant="h5">R$ 10.000.000,00</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Infos
