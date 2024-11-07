import type { Dispute } from '../core'

export interface AdminFunctions {
  admcancel: (orderId: string) => Promise<void>
  admsettle: (orderId: string) => Promise<void>
  admlistdisputes: () => Promise<Dispute[]>
  admaddsolver: (pubkey: string) => Promise<void>
  admtakedispute: (disputeId: string) => Promise<void>
}
