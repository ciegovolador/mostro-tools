import type { Order } from '../../types/core/order'
import { createOrder } from '../../core/order'
import { publishEvent } from '../../utils/nostr'

/**
 * Create and publish a new order.
 * @param order The partial order details.
 * @param privateKey The private key of the creator.
 * @param recipientPublicKey The public key of the recipient (e.g., Mostro's pubkey).
 * @param relayUrl The relay URL to publish the event to.
 * @returns The published order event.
 */
export async function newOrder(
  order: Partial<Order>,
  privateKey: Uint8Array,
  recipientPublicKey: string,
  relayUrl: string,
): Promise<any> {
  // Create the order event
  const event = createOrder(order, privateKey, recipientPublicKey)

  // Publish the event to the relay
  await publishEvent(event, relayUrl)

  return event
}
