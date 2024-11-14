import { generateSecretKey, getPublicKey } from 'nostr-tools'
import { describe, expect, it } from 'vitest'
import { OrderStatus, OrderType } from '../../src/types/core/order.ts'
import { unwrapGiftWrapEvent } from '../../src/utils/nostr.ts'
import { createOrder } from '../../src/core/order.ts'

describe('createOrder with NIP-59', () => {
  it('should create a valid NIP-59 wrapped Nostr event for an order', () => {
    const senderPrivateKey = generateSecretKey()
    const recipientPublicKey = getPublicKey(generateSecretKey()) // Simulated recipient

    const order = {
      kind: OrderType.SELL,
      fiat_code: 'EUR',
      amount: 100,
      payment_method: 'SEPA',
    }

    const wrappedEvent = createOrder(order, senderPrivateKey, recipientPublicKey)

    // Validate the wrapped event structure
    expect(wrappedEvent.kind).toBe(1059) // Kind for NIP-59
    expect(wrappedEvent.tags).toContainEqual(['p', recipientPublicKey])
    expect(wrappedEvent.content).not.toBeNull()

    // Unwrap the event and validate the original content
    const unwrappedEvent = unwrapGiftWrapEvent(wrappedEvent, senderPrivateKey)
    const originalContent = JSON.parse(unwrappedEvent.content)

    expect(originalContent.kind).toBe(OrderType.SELL)
    expect(originalContent.fiat_code).toBe('EUR')
    expect(originalContent.amount).toBe(100)
    expect(originalContent.payment_method).toBe('SEPA')
    expect(originalContent.status).toBe(OrderStatus.PENDING)
  })
})
