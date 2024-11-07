import type { MessageKind } from '../core/message'

export interface MessageFunctions {
  getdm: (pubkey: string) => Promise<MessageKind[]>
  fiatsent: (orderId: string) => Promise<void>
  addinvoice: (orderId: string, invoice: string) => Promise<void>
  release: (orderId: string) => Promise<void>
}
