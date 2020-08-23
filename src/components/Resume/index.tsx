import React, { useEffect, useState } from 'react'
import {
  Box,
  Grid,
  Paper,
  useMediaQuery,
  Typography,
  withStyles
} from '@material-ui/core'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'
import theme from '../../styles/theme'

const MyPaper = withStyles({
  root: {
    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: '-18px',
      left: '5px',
      border: 'solid 10px transparent',
      borderTopColor: '#FFF'
    }
  }
})(Paper)

const Resume: React.FC = () => {
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  const data = [
    { name: 'Tesouro', assets: 2, value: 'R$ 4.000,00 | 10%' },
    { name: 'Previdência', assets: 5, value: 'R$ 10.000,00 | 1%%' },
    { name: 'Ações/Futuros', assets: 5, value: 'R$ 10.000,00 | 15%' },
    { name: 'Renda Fixa', assets: 5, value: 'R$ 10.000,00 | 15%' },
    { name: 'Fundos', assets: 5, value: 'R$ 10.000,00 | 15%' }
  ]

  const COLORS = [
    theme.palette.grey[400],
    theme.palette.primary.contrastText,
    theme.palette.primary.main,
    theme.palette.primary.dark,
    theme.palette.primary.light
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active) {
      return (
        <Box>
          <MyPaper elevation={1}>
            <Box p={2}>
              <Typography style={{ fontWeight: 'bold' }}>
                {payload[0].payload.name}
              </Typography>
              <Typography>{payload[0].payload.value}</Typography>
            </Box>
          </MyPaper>
        </Box>
      )
    }

    return null
  }

  return (
    <Grid container>
      <Grid item xs={12} md={6} lg={4}>
        <Box width={1} p={4}>
          <Paper elevation={3}>
            <Box p={3} pb={0} color="grey.500">
              <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                Minha carteira
              </Typography>
            </Box>
            <Box
              width={1}
              height={400}
              display="flex"
              justifyContent="center"
              position="relative"
            >
              <PieChart width={matches ? 600 : 300} height={400}>
                <Pie
                  data={data}
                  innerRadius={matches ? 128 : 100}
                  dataKey="assets"
                  startAngle={60}
                  endAngle={420}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  content={<CustomTooltip />}
                  offset={0}
                  wrapperStyle={{ zIndex: 1500, float: 'right' }}
                />
              </PieChart>
              <Box position="absolute" top="40%" zIndex={0}>
                <Box
                  borderBottom={1}
                  width={128}
                  pb={2}
                  textAlign="center"
                  style={{ borderColor: theme.palette.grey[400] }}
                >
                  <Typography style={{ fontWeight: 'bold' }} variant="h6">
                    R$ 44.000, 00
                  </Typography>
                  <Box mt={1}>
                    <Typography>22 ATIVOS</Typography>
                  </Box>
                </Box>
                <Box textAlign="center" mt={1}>
                  <Typography>Valor total bruto</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', md: 'row' }}
              justifyContent="center"
            >
              <Box
                display="flex"
                flexDirection="column"
                textAlign="center"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  bgcolor="primary.dark"
                  height="4px"
                  width={{ xs: '25%', md: '50%' }}
                  mb={1}
                  borderRadius={4}
                ></Box>
                <Typography style={{ fontWeight: 'bold' }}>
                  Renda Fixa
                </Typography>
                <Box color="grey.500">
                  <Typography>10% | 5 ativos</Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                textAlign="center"
                alignItems="center"
                ml={{ xs: 0, md: 3 }}
                mt={{ xs: 3, md: 0 }}
              >
                <Box
                  bgcolor="primary.main"
                  height="4px"
                  width={{ xs: '25%', md: '50%' }}
                  mb={1}
                  borderRadius={4}
                ></Box>
                <Typography style={{ fontWeight: 'bold' }}>Fundos</Typography>
                <Box color="grey.500">
                  <Typography>10% | 5 ativos</Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                textAlign="center"
                alignItems="center"
                ml={{ xs: 0, md: 3 }}
                mt={{ xs: 3, md: 0 }}
              >
                <Box
                  bgcolor="primary.contrastText"
                  height="4px"
                  width={{ xs: '25%', md: '50%' }}
                  mb={1}
                  borderRadius={4}
                ></Box>
                <Typography style={{ fontWeight: 'bold' }}>
                  Previdência
                </Typography>
                <Box color="grey.500">
                  <Typography>10% | 5 ativos</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', md: 'row' }}
              justifyContent="center"
              mt={2}
              pb={4}
            >
              <Box
                display="flex"
                flexDirection="column"
                textAlign="center"
                alignItems="center"
              >
                <Box
                  bgcolor="primary.light"
                  height="4px"
                  width={{ xs: '25%', md: '50%' }}
                  mb={1}
                  borderRadius={4}
                ></Box>
                <Typography style={{ fontWeight: 'bold' }}>
                  Ações/Futuros
                </Typography>
                <Box color="grey.500">
                  <Typography>10% | 5 ativos</Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                textAlign="center"
                alignItems="center"
                ml={{ xs: 0, md: 3 }}
                mt={{ xs: 3, md: 0 }}
              >
                <Box
                  bgcolor="grey.400"
                  height="4px"
                  width={{ xs: '25%', md: '50%' }}
                  mb={1}
                  borderRadius={4}
                ></Box>
                <Typography style={{ fontWeight: 'bold' }}>Tesouro</Typography>
                <Box color="grey.500">
                  <Typography>10% | 5 ativos</Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Resume
