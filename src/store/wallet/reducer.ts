import { WalletReducer } from './types'

const initialState = {
  wallet: [
    { name: 'Tesouro', assets: 2, value: 'R$ 4.000,00 | 10%' },
    { name: 'Previdência', assets: 5, value: 'R$ 10.000,00 | 1%%' },
    { name: 'Ações/Futuros', assets: 5, value: 'R$ 10.000,00 | 15%' },
    { name: 'Renda Fixa', assets: 5, value: 'R$ 10.000,00 | 15%' },
    { name: 'Fundos', assets: 5, value: 'R$ 10.000,00 | 15%' }
  ],
  profitability: [
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
  ],
  total: '44.000, 00'
}

const walletReducer = (state: WalletReducer = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default walletReducer
