import type { Order } from '../types/core/order'
import { finalizeEvent } from 'nostr-tools'
import { OrderStatus, OrderType } from '../types/core/order'
import { createGiftWrapEvent } from '../utils/nostr'

/**
 * Create a new NIP-59 wrapped order event for Mostro.
 * @param order The partial order details (fields required to initialize the order).
 * @param senderPrivateKey The private key of the creator.
 * @param recipientPublicKey The public key of the recipient (e.g., Mostro's pubkey).
 * @returns The wrapped Nostr event using NIP-59.
 */
export function createOrder(
  order: Partial<Order>,
  senderPrivateKey: Uint8Array,
  recipientPublicKey: string,
) {
  // Ensure required fields for an order are present
  const newOrder: Partial<Order> = {
    kind: order.kind || OrderType.BUY,
    status: OrderStatus.PENDING,
    fiat_code: order.fiat_code || 'USD',
    amount: order.amount || 0,
    payment_method: order.payment_method || 'unknown',
    created_at: Math.floor(Date.now() / 1000),
    ...order,
  }

  // Create a plain Nostr event
  const eventTemplate = {
    kind: 38383, // Mostro-specific Nostr kind
    created_at: newOrder.created_at,
    tags: [
      ['fiat_code', newOrder.fiat_code],
      ['kind', newOrder.kind],
      ['payment_method', newOrder.payment_method],
    ],
    content: JSON.stringify(newOrder),
  }

  // Finalize the plain event
  const plainEvent = finalizeEvent(eventTemplate, senderPrivateKey)

  // Wrap the event using NIP-59
  return createGiftWrapEvent(plainEvent, senderPrivateKey, recipientPublicKey)
}
