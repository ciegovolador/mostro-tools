import { nip59, SimplePool } from 'nostr-tools'

const pool = new SimplePool()

/**
 * Publish an event to a specific relay.
 * @param event The event object to publish.
 * @param relayUrl The relay URL to publish the event to.
 */
export async function publishEvent(event: any, relayUrl: string): Promise<void> {
  const relay = pool.getRelay(relayUrl) || pool.addRelay(relayUrl, true)

  return new Promise((resolve, reject) => {
    const pub = relay.publish(event)
    pub.on('ok', () => {
      console.log(`Event successfully published to ${relayUrl}`)
      resolve()
    })
    pub.on('failed', (reason: string) => {
      console.error(`Failed to publish event to ${relayUrl}: ${reason}`)
      reject(new Error(reason))
    })
  })
}

/**
 * Create a wrapped event using NIP-59.
 * @param content The event content.
 * @param senderPrivateKey Sender's private key.
 * @param recipientPublicKey Recipient's public key.
 * @returns A wrapped Nostr event.
 */
export function createGiftWrapEvent(content: any, senderPrivateKey: Uint8Array, recipientPublicKey: string): any {
  const rumor = nip59.createRumor(content, senderPrivateKey)
  const seal = nip59.createSeal(rumor, senderPrivateKey, recipientPublicKey)
  return nip59.createWrap(seal, recipientPublicKey)
}

/**
 * Unwrap a wrapped event.
 * @param wrappedEvent The wrapped Nostr event.
 * @param recipientPrivateKey Recipient's private key.
 * @returns The unwrapped rumor.
 */
export function unwrapGiftWrapEvent(wrappedEvent: any, recipientPrivateKey: Uint8Array): any {
  return nip59.unwrapEvent(wrappedEvent, recipientPrivateKey)
}

/**
 * Unwrap multiple wrapped events.
 * @param wrappedEvents Array of wrapped Nostr events.
 * @param recipientPrivateKey Recipient's private key.
 * @returns An array of unwrapped rumors.
 */
export function unwrapMultipleGiftWrapEvents(wrappedEvents: any[], recipientPrivateKey: Uint8Array): any[] {
  return nip59.unwrapManyEvents(wrappedEvents, recipientPrivateKey)
}
