import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core'
import theme from '../../styles/theme'

interface IProps {
  showValues: boolean
}

const CategoryProfit: React.FC<IProps> = ({ showValues }) => {
  return (
    <Box pl={4} pr={4} mb={5} pb={5}>
      <Box color="grey.500" display="flex" alignItems="baseline">
        <Typography style={{ fontWeight: 'bold' }}>
          Rentabilidade por categoria
        </Typography>
        <Box ml={1}>
          <Typography style={{ fontSize: 12 }}>Versão Beta</Typography>
        </Box>
      </Box>
      <Box
        pt={2}
        pb={2}
        display="flex"
        flexDirection={{ xs: 'column', md: 'column', lg: 'row' }}
      >
        <Box width={{ md: 1, lg: 0.2 }}>
          <Paper elevation={3}>
            <Box p={2} mr={{ md: 2, lg: 0 }}>
              <Box
                ml={2}
                mt={2}
                bgcolor="primary.main"
                width={{ md: 1, lg: 0.3 }}
                color="common.white"
                textAlign="center"
                borderRadius={32}
                p="4px"
              >
                <Typography style={{ fontWeight: 'bold', fontSize: 14 }}>
                  FUNDOS
                </Typography>
              </Box>
              <Box
                color="grey.600"
                borderBottom={1}
                ml={2}
                mr={2}
                mt={2}
                pb={2}
                style={{ borderColor: theme.palette.grey[300] }}
              >
                {showValues ? (
                  <Typography variant="h5">R$ 5.000.000,00</Typography>
                ) : (
                  <Typography variant="h5">
                    R$ &#9679; &#9679; &#9679; &#9679; &#9679;
                  </Typography>
                )}
              </Box>
              <Box m={2} display="flex" justifyContent="space-between">
                <Box color="grey.600">
                  <Typography>Mês</Typography>
                  <Typography
                    variant="h6"
                    style={{ color: '#32CD32', fontWeight: 'bold' }}
                  >
                    + 5%
                  </Typography>
                </Box>
                <Box color="grey.600">
                  <Typography>Ano</Typography>
                  <Typography
                    variant="h6"
                    style={{ color: '#32CD32', fontWeight: 'bold' }}
                  >
                    + 5%
                  </Typography>
                </Box>
                <Box color="grey.600">
                  <Typography>12 Meses</Typography>
                  <Typography
                    variant="h6"
                    style={{ color: '#32CD32', fontWeight: 'bold' }}
                  >
                    + 5%
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box
          width={{ md: 1, lg: 0.2 }}
          ml={{ md: 0, lg: 2 }}
          mt={{ xs: 2, lg: 0 }}
        >
          <Paper elevation={3}>
            <Box p={2} mr={{ md: 2, lg: 0 }}>
              <Box
                ml={2}
                mt={2}
                bgcolor="primary.dark"
                width={{ md: 1, lg: 0.4 }}
                color="common.white"
                textAlign="center"
                borderRadius={32}
                p="4px"
              >
                <Typography style={{ fontWeight: 'bold', fontSize: 14 }}>
                  RENDA FIXA
                </Typography>
              </Box>
              <Box
                color="grey.600"
                borderBottom={1}
                ml={2}
                mr={2}
                mt={2}
                pb={2}
                style={{ borderColor: theme.palette.grey[300] }}
              >
                {showValues ? (
                  <Typography variant="h5">R$ 5.000.000,00</Typography>
                ) : (
                  <Typography variant="h5">
                    R$ &#9679; &#9679; &#9679; &#9679; &#9679;
                  </Typography>
                )}
              </Box>
              <Box m={2} display="flex" justifyContent="space-between">
                <Box color="grey.600">
                  <Typography>Mês</Typography>
                  <Typography
                    variant="h6"
                    style={{ color: '#32CD32', fontWeight: 'bold' }}
                  >
                    + 5%
                  </Typography>
                </Box>
                <Box color="grey.600">
                  <Typography>Ano</Typography>
                  <Typography
                    variant="h6"
                    style={{ color: '#32CD32', fontWeight: 'bold' }}
                  >
                    + 5%
                  </Typography>
                </Box>
                <Box color="grey.600">
                  <Typography>12 Meses</Typography>
                  <Typography
                    variant="h6"
                    style={{ color: '#32CD32', fontWeight: 'bold' }}
                  >
                    + 5%
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box
          width={{ md: 1, lg: 0.2 }}
          ml={{ md: 0, lg: 2 }}
          mt={{ xs: 2, lg: 0 }}
        >
          <Paper elevation={3}>
            <Box p={2} mr={{ md: 2, lg: 0 }}>
              <Box
                ml={2}
                mt={2}
                bgcolor="primary.light"
                width={{ md: 1, lg: 0.5 }}
                color="common.white"
                textAlign="center"
                borderRadius={32}
                p="4px"
              >
                <Typography style={{ fontWeight: 'bold', fontSize: 14 }}>
                  AÇÕES/FUTUROS
                </Typography>
              </Box>
              <Box
                color="grey.600"
                borderBottom={1}
                ml={2}
                mr={2}
                mt={2}
                pb={2}
                style={{ borderColor: theme.palette.grey[300] }}
              >
                {showValues ? (
                  <Typography variant="h5">R$ 5.000.000,00</Typography>
                ) : (
                  <Typography variant="h5">
                    R$ &#9679; &#9679; &#9679; &#9679; &#9679;
                  </Typography>
                )}
              </Box>
              <Box m={2} display="flex" justifyContent="space-between">
                <Box color="grey.600">
                  <Typography>Mês</Typography>
                  <Typography
                    variant="h6"
                    style={{ color: '#32CD32', fontWeight: 'bold' }}
                  >
                    + 5%
                  </Typography>
                </Box>
                <Box color="grey.600">
                  <Typography>Ano</Typography>
                  <Typography
                    variant="h6"
                    style={{ color: '#32CD32', fontWeight: 'bold' }}
                  >
                    + 5%
                  </Typography>
                </Box>
                <Box color="grey.600">
                  <Typography>12 Meses</Typography>
                  <Typography
                    variant="h6"
                    style={{ color: '#32CD32', fontWeight: 'bold' }}
                  >
                    + 5%
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box
          width={{ md: 1, lg: 0.2 }}
          ml={{ md: 0, lg: 2 }}
          mt={{ xs: 2, lg: 0 }}
        >
          <Paper elevation={3}>
            <Box p={2} mr={{ md: 2, lg: 0 }}>
              <Box
                ml={2}
                mt={2}
                bgcolor="grey.400"
                width={{ md: 1, lg: 0.3 }}
                color="common.white"
                textAlign="center"
                borderRadius={32}
                p="4px"
              >
                <Typography style={{ fontWeight: 'bold', fontSize: 14 }}>
                  TESOURO
                </Typography>
              </Box>
              <Box
                color="grey.600"
                borderBottom={1}
                ml={2}
                mr={2}
                mt={2}
                pb={2}
                style={{ borderColor: theme.palette.grey[300] }}
              >
                {showValues ? (
                  <Typography variant="h5">R$ 5.000.000,00</Typography>
                ) : (
                  <Typography variant="h5">
                    R$ &#9679; &#9679; &#9679; &#9679; &#9679;
                  </Typography>
                )}
              </Box>
              <Box m={2} display="flex" justifyContent="space-between">
                <Box color="grey.600">
                  <Typography>Mês</Typography>
                  <Typography
                    variant="h6"
                    style={{ color: '#32CD32', fontWeight: 'bold' }}
                  >
                    + 5%
                  </Typography>
                </Box>
                <Box color="grey.600">
                  <Typography>Ano</Typography>
                  <Typography
                    variant="h6"
                    style={{ color: '#32CD32', fontWeight: 'bold' }}
                  >
                    + 5%
                  </Typography>
                </Box>
                <Box color="grey.600">
                  <Typography>12 Meses</Typography>
                  <Typography
                    variant="h6"
                    style={{ color: '#32CD32', fontWeight: 'bold' }}
                  >
                    + 5%
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box
          width={{ md: 1, lg: 0.2 }}
          ml={{ md: 0, lg: 2 }}
          mt={{ xs: 2, lg: 0 }}
        >
          <Paper elevation={3}>
            <Box p={2} mr={{ md: 2, lg: 0 }}>
              <Box
                ml={2}
                mt={2}
                bgcolor="primary.contrastText"
                width={{ md: 1, lg: 0.4 }}
                color="common.white"
                textAlign="center"
                borderRadius={32}
                p="4px"
              >
                <Typography style={{ fontWeight: 'bold', fontSize: 14 }}>
                  PREVIDÊNCIA
                </Typography>
              </Box>
              <Box
                color="grey.600"
                borderBottom={1}
                ml={2}
                mr={2}
                mt={2}
                pb={2}
                style={{ borderColor: theme.palette.grey[300] }}
              >
                {showValues ? (
                  <Typography variant="h5">R$ 5.000.000,00</Typography>
                ) : (
                  <Typography variant="h5">
                    R$ &#9679; &#9679; &#9679; &#9679; &#9679;
                  </Typography>
                )}
              </Box>
              <Box m={2} display="flex" justifyContent="space-between">
                <Box color="grey.600">
                  <Typography>Mês</Typography>
                  <Typography
                    variant="h6"
                    style={{ color: '#32CD32', fontWeight: 'bold' }}
                  >
                    + 5%
                  </Typography>
                </Box>
                <Box color="grey.600">
                  <Typography>Ano</Typography>
                  <Typography
                    variant="h6"
                    style={{ color: '#32CD32', fontWeight: 'bold' }}
                  >
                    + 5%
                  </Typography>
                </Box>
                <Box color="grey.600">
                  <Typography>12 Meses</Typography>
                  <Typography
                    variant="h6"
                    style={{ color: '#32CD32', fontWeight: 'bold' }}
                  >
                    + 5%
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  )
}

export default CategoryProfit
