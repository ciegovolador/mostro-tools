export enum DisputeStatus {
  INITIATED = 'initiated',
  IN_PROGRESS = 'in-progress',
  SELLER_REFUNDED = 'seller-refunded',
  SETTLED = 'settled',
  RELEASED = 'released',
}

export interface Dispute {
  id: string
  order_id: string
  status: DisputeStatus
  solver_pubkey: string | null
  created_at: number
  taken_at: number
  buyer_token: number | null
  seller_token: number | null
}
