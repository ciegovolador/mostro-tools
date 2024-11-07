// src/types/core/message.ts
import type { Order } from './order'

export interface Peer {
  pubkey: string
}

export enum Action {
  NewOrder = 'new-order',
  TakeSell = 'take-sell',
  TakeBuy = 'take-buy',
  PayInvoice = 'pay-invoice',
  FiatSent = 'fiat-sent',
  FiatSentOk = 'fiat-sent-ok',
  Release = 'release',
  Released = 'released',
  Cancel = 'cancel',
  Canceled = 'canceled',
  Rate = 'rate',
  RateUser = 'rate-user',
  RateReceived = 'rate-received',
  Dispute = 'dispute',
  HoldInvoicePaymentAccepted = 'hold-invoice-payment-accepted',
  HoldInvoicePaymentSettled = 'hold-invoice-payment-settled',
  WaitingBuyerInvoice = 'waiting-buyer-invoice',
  WaitingSellerToPay = 'waiting-seller-to-pay',
  AddInvoice = 'add-invoice',
  BuyerTookOrder = 'buyer-took-order',
}

export interface MessageContent {
  order?: Order
  payment_request?: [Order | null, string, number?]
  text_message?: string
  peer?: Peer
  rating_user?: number
}

export interface MessageKind {
  version: number
  request_id: number
  id?: string
  action: Action
  content?: MessageContent
}
