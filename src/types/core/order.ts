// src/types/core/order.ts
export enum OrderType {
  BUY = 'buy',
  SELL = 'sell',
}

export enum OrderStatus {
  ACTIVE = 'active',
  CANCELED = 'canceled',
  CANCELED_BY_ADMIN = 'canceled-by-admin',
  SETTLED_BY_ADMIN = 'settled-by-admin',
  COMPLETED_BY_ADMIN = 'completed-by-admin',
  DISPUTE = 'dispute',
  EXPIRED = 'expired',
  FIAT_SENT = 'fiat-sent',
  SETTLED_HOLD_INVOICE = 'settled-hold-invoice',
  PENDING = 'pending',
  SUCCESS = 'success',
  WAITING_BUYER_INVOICE = 'waiting-buyer-invoice',
  WAITING_PAYMENT = 'waiting-payment',
  COOPERATIVELY_CANCELED = 'cooperatively-canceled',
}

export interface Order {
  id: string;
  kind: OrderType;
  status: OrderStatus;
  event_id: string;
  hash: string | null;
  preimage: string | null;
  creator_pubkey: string;
  cancel_initiator_pubkey: string | null;
  buyer_pubkey: string | null;
  seller_pubkey: string | null;
  price_from_api: boolean;
  premium: number;
  payment_method: string;
  amount: number;
  min_amount: number | null;
  max_amount: number | null;
  buyer_dispute: boolean;
  seller_dispute: boolean;
  buyer_cooperativecancel: boolean;
  seller_cooperativecancel: boolean;
  fee: number;
  routing_fee: number;
  fiat_code: string;
  fiat_amount: number;
  buyer_invoice: string | null;
  range_parent_id: string | null;
  invoice_held_at: number;
  taken_at: number;
  created_at: number;
  buyer_sent_rate: boolean;
  seller_sent_rate: boolean;
  failed_payment: boolean;
  payment_attempts: number;
  expires_at: number;
  master_buyer_pubkey?: string;
  master_seller_pubkey?: string;
}
