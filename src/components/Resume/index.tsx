import React from 'react'
import { Grid } from '@material-ui/core'

import Wallet from '../Wallet'
import Profitability from '../Profitability'
import ChartProfit from '../ChartProfit'
import CategoryProfit from '../CategoryProfit'

interface IProps {
  showValues: boolean
}

const Resume: React.FC<IProps> = ({ showValues }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={4}>
        <Wallet showValues={showValues} />
      </Grid>
      <Grid item xs={12} lg={8}>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Profitability />
          </Grid>
          <Grid item xs={12} lg={12}>
            <ChartProfit />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <CategoryProfit showValues={showValues} />
      </Grid>
    </Grid>
  )
}

export default Resume
