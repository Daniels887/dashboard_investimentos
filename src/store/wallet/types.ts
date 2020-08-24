export interface WalletReducer {
  wallet: { name: string; assets: number; value: string }[]
  profitability: { name: string; carteira: number; ipca: number; cdi: number }[]
  total: string
}
