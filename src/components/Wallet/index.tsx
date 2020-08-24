import React from 'react'
import {
  Box,
  Paper,
  Typography,
  useMediaQuery,
  withStyles
} from '@material-ui/core'
import { PieChart, Tooltip, Pie, Cell } from 'recharts'
import theme from '../../styles/theme'
import { useSelector } from '../../store'

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

interface IProps {
  showValues: boolean
}

const Wallet: React.FC<IProps> = ({ showValues }) => {
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const data = useSelector((state) => state.wallet)

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
    <Box width={1} pt={4} pl={4} pr={{ xs: 4, md: 4, lg: 0 }}>
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
            <Tooltip
              content={<CustomTooltip />}
              offset={0}
              wrapperStyle={{ zIndex: 1500, float: 'right' }}
            />
            <Pie
              data={data.wallet}
              innerRadius={matches ? 128 : 100}
              dataKey="assets"
              startAngle={60}
              endAngle={420}
            >
              {data.wallet.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <Box position="absolute" top="40%" zIndex={0}>
            <Box
              borderBottom={1}
              width={128}
              pb={2}
              textAlign="center"
              style={{ borderColor: theme.palette.grey[400] }}
            >
              {showValues ? (
                <Typography style={{ fontWeight: 'bold' }} variant="h6">
                  R$ {data.total}
                </Typography>
              ) : (
                <Typography style={{ fontWeight: 'bold' }} variant="h6">
                  R$ &#9679; &#9679; &#9679; &#9679; &#9679;
                </Typography>
              )}
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
          mb={3}
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
            <Typography style={{ fontWeight: 'bold' }}>Renda Fixa</Typography>
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
            <Typography style={{ fontWeight: 'bold' }}>Previdência</Typography>
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
  )
}

export default Wallet
