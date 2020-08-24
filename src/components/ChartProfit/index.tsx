import React from 'react'
import {
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
  Checkbox,
  withStyles
} from '@material-ui/core'
import theme from '../../styles/theme'
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line
} from 'recharts'
import { InfoOutlined } from '@material-ui/icons'

const MyBox = withStyles({
  root: {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-7px',
      left: 0,
      height: '16px',
      border: 'solid 4px transparent',
      borderRight: 'transparent',
      borderColor: theme.palette.primary.dark
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-7px',
      right: 0,
      height: '16px',
      border: 'solid 4px transparent',
      borderLeft: 'transparent',
      borderColor: theme.palette.primary.dark
    }
  }
})(Box)

const ChartProfit: React.FC = () => {
  const data = [
    { name: 'jan', carteira: 1.0, ipca: 1.5, cdi: 1.0 },
    { name: 'fev', carteira: 2.0, ipca: 2.0, cdi: 1.5 },
    { name: 'mar', carteira: 3.5, ipca: 2.5, cdi: 3.5 },
    { name: 'abr', carteira: 2.5, ipca: 3.0, cdi: 2.5 },
    { name: 'jun', carteira: 1.5, ipca: 1.0, cdi: 2.0 },
    { name: 'ago', carteira: 3.0, ipca: 3.5, cdi: 3.0 },
    { name: 'set', carteira: 4.0, ipca: 2.5, cdi: 4.5 },
    { name: 'out', carteira: 4.5, ipca: 4.0, cdi: 4.0 },
    { name: 'nov', carteira: 3.5, ipca: 4.5, cdi: 2.5 },
    { name: 'dez', carteira: 2.5, ipca: 2.5, cdi: 5.0 }
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active) {
      return (
        <Box>
          <Paper elevation={1}>
            <Box p={2}>
              <Box color="primary.dark">
                <Typography style={{ fontWeight: 'bold' }}>
                  {payload[0].name}
                </Typography>
              </Box>
              <Typography>{payload[0].payload.carteira}%</Typography>
            </Box>
          </Paper>
          <Paper elevation={1}>
            <Box p={2} mt={2} display="flex">
              <Box color="primary.light" mr={1}>
                <Typography style={{ fontWeight: 'bold' }}>
                  {payload[1].name}
                </Typography>
              </Box>
              <Typography>{payload[0].payload.ipca}%</Typography>
            </Box>
          </Paper>
          <Paper elevation={1}>
            <Box p={2} mt={2} display="flex">
              <Box color="primary.contrastText" mr={1}>
                <Typography style={{ fontWeight: 'bold' }}>
                  {payload[2].name}
                </Typography>
              </Box>
              <Typography>{payload[0].payload.cdi}%</Typography>
            </Box>
          </Paper>
        </Box>
      )
    }
    return null
  }

  return (
    <Box width={1} p={4} pt={0}>
      <Paper elevation={3}>
        <Box pr={2}>
          <Box
            display="flex"
            alignItems="baseline"
            color="grey.500"
            pt={3}
            pl={{ xs: 2, md: 3 }}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
          >
            <Typography style={{ fontWeight: 'bold' }}>
              Gráfico de rentabilidade
            </Typography>
            <Box ml={2}>
              <Typography style={{ fontSize: 12 }}>Versão Beta</Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            pl={3}
            justifyContent={{ xs: 'center', md: 'space-between' }}
          >
            <Box
              display="flex"
              flexDirection={{ xs: 'column', md: 'row' }}
              alignItems="center"
              justifyContent="center"
            >
              <Box mr={2}>
                <Button variant="text" style={{ marginLeft: 0, padding: 0 }}>
                  <Box
                    p={1}
                    color="grey.500"
                    borderRadius={16}
                    boxShadow={4}
                    style={{ textTransform: 'none' }}
                    mt={{ xs: 2, md: 0 }}
                  >
                    no ano
                  </Box>
                </Button>
              </Box>
              <Box mr={2}>
                <Button variant="text" style={{ marginLeft: 0, padding: 0 }}>
                  <Box
                    p={1}
                    color="grey.500"
                    borderRadius={16}
                    boxShadow={4}
                    style={{ textTransform: 'none' }}
                    mt={{ xs: 2, md: 0 }}
                  >
                    no mês
                  </Box>
                </Button>
              </Box>
              <Button variant="text" style={{ marginLeft: 0, padding: 0 }}>
                <Box
                  p={1}
                  color="common.white"
                  borderRadius={16}
                  boxShadow={4}
                  bgcolor="primary.dark"
                  style={{ textTransform: 'none' }}
                  mt={{ xs: 2, md: 0 }}
                >
                  desde o ínicio*
                </Box>
              </Button>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ xs: 'center', md: 'flex-end' }}
              mt={{ xs: 2, md: 0 }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="grey.500"
              >
                <Typography style={{ fontSize: 12 }}>Powered by</Typography>
                <Box ml={1}>
                  <Typography
                    style={{
                      color: theme.palette.primary.light,
                      fontWeight: 'bold'
                    }}
                  >
                    Gorila
                  </Typography>
                </Box>
                <IconButton>
                  <InfoOutlined />
                </IconButton>
              </Box>
              <Box>
                <Button variant="text" style={{ marginLeft: 0, padding: 0 }}>
                  <Box
                    p={1}
                    color="common.black"
                    borderRadius={16}
                    boxShadow={4}
                    style={{ textTransform: 'none' }}
                    mr={2}
                    fontWeight="bold"
                  >
                    Conheça o Gorila Connect
                  </Box>
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            width={1}
            display="flex"
            justifyContent="center"
            position="relative"
            style={{ fontWeight: 'bold' }}
            alignItems="center"
            mt={3}
            pl={1}
            pr={3}
          >
            <ResponsiveContainer width="100%" height={218}>
              <LineChart data={data}>
                <XAxis dataKey="name" tickLine={false} tickMargin={10} />
                <YAxis
                  type="number"
                  domain={[0, 5]}
                  ticks={[0, 1, 2.5, 5]}
                  tickFormatter={(value) => value + '%'}
                  tickMargin={15}
                  axisLine={false}
                  tickLine={false}
                />
                <CartesianGrid strokeDasharray="3" vertical={false} />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="linear"
                  dataKey="carteira"
                  stroke={theme.palette.primary.dark}
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="linear"
                  dataKey="ipca"
                  stroke={theme.palette.primary.light}
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="linear"
                  dataKey="cdi"
                  stroke={theme.palette.primary.contrastText}
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
          <Box pl={4} pr={2} mt={2}>
            <MyBox
              position="relative"
              width={1}
              height={2}
              bgcolor="primary.dark"
            >
              <Box
                width={0.45}
                height={8}
                bgcolor="primary.dark"
                position="absolute"
                left={16}
                top={-3}
              ></Box>
            </MyBox>
          </Box>
          <Box
            pl={4}
            mt={2}
            color="grey.600"
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent={{ xs: 'center', md: 'space-between' }}
            alignItems={{ xs: 'center', md: 'flex-end' }}
            pb={2}
          >
            <Box
              display="flex"
              alignItems={{ xs: 'flex-start', md: 'center' }}
              flexDirection={{ xs: 'column', md: 'row' }}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              mt={{ xs: 1, md: 0 }}
            >
              <Typography style={{ fontWeight: 'bold' }}>
                Comparativos:
              </Typography>
              <Box>
                <Checkbox
                  checked={true}
                  style={{ color: theme.palette.primary.contrastText }}
                />
                CDI
              </Box>
              <Box>
                <Checkbox checked={false} />
                Poupança
              </Box>
              <Box>
                <Checkbox checked={false} />
                IBOV
              </Box>
              <Box>
                <Checkbox
                  checked={true}
                  style={{ color: theme.palette.primary.main }}
                />
                IPCA
              </Box>
            </Box>
            <Box width={{ xs: '100%', md: '40%' }} mt={{ xs: 4, md: 0 }}>
              <Typography style={{ fontSize: 12 }}>
                * A rentabilidade corresponde ao período de 12/01/2019 em diante
                para clientes que criaram carteiras antes de Jan/19. Demais
                clientes verão a rentabilidade desde a data de criação da
                carteira.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
      <Box color="grey.500" fontSize={12} mt={2}>
        **A rentalibidade de CRA, CRI, COE, Prev, Super CDB e Exercícios de
        Opção ainda não está disponível em nossa plataforma
      </Box>
    </Box>
  )
}

export default ChartProfit
