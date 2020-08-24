import React from 'react'
import { Box, Typography, Grid } from '@material-ui/core'
import { useSelector } from '../../store'

interface IProps {
  showValues: boolean
}

const Infos: React.FC<IProps> = ({ showValues }) => {
  const user = useSelector((state) => state.user)

  return (
    <Box m={2} ml={{ xs: 0, md: 4 }} textAlign={{ xs: 'center', md: 'left' }}>
      <Grid container>
        <Grid item xs={12} md={2}>
          <Box display="flex" flexDirection="column" mt={{ xs: 2, md: 0 }}>
            <Typography style={{ fontWeight: 'bold' }}>
              Saldo em conta corrente
            </Typography>
            <Box color="grey.600" mt={1}>
              {showValues ? (
                <Typography variant="h5">R$ {user.sale}</Typography>
              ) : (
                <Typography variant="h5">
                  R$ &#9679; &#9679; &#9679; &#9679; &#9679;
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box display="flex" flexDirection="column" mt={{ xs: 2, md: 0 }}>
            <Typography style={{ fontWeight: 'bold' }}>
              Disponível para investir
            </Typography>
            <Box color="grey.600" mt={1}>
              {showValues ? (
                <Typography variant="h5">R$ {user.available}</Typography>
              ) : (
                <Typography variant="h5">
                  R$ &#9679; &#9679; &#9679; &#9679; &#9679;
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box display="flex" flexDirection="column" mt={{ xs: 2, md: 0 }}>
            <Typography style={{ fontWeight: 'bold' }}>
              Patrimônio total:
            </Typography>
            <Box color="grey.600" mt={1}>
              {showValues ? (
                <Typography variant="h5">R$ {user.patrimony}</Typography>
              ) : (
                <Typography variant="h5">
                  R$ &#9679; &#9679; &#9679; &#9679; &#9679;
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Infos
