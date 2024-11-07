export enum OrderType {
  BUY = 'buy',
  SELL = 'sell',
}

export enum OrderStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  CANCELED = 'canceled',
  WAITING_PAYMENT = 'waiting-payment',
  WAITING_BUYER_INVOICE = 'waiting-buyer-invoice',
  FIAT_SENT = 'fiat-sent',
  SUCCESS = 'success',
  DISPUTE = 'dispute',
  EXPIRED = 'expired',
}

export interface Order {
  id: string
  kind: OrderType
  status: OrderStatus
  amount: number
  fiat_code: string
  min_amount: number | null
  max_amount: number | null
  fiat_amount: number
  payment_method: string
  premium: number
  created_at: number
  buyer_pubkey?: string
  seller_pubkey?: string
  buyer_invoice?: string
  master_seller_pubkey?: string
  master_buyer_pubkey?: string
  expires_at?: number
}
