import { nip59 } from 'nostr-tools'

/**
 * Create a wrapped event using NIP-59.
 * @param content The event content
 * @param senderPrivateKey Sender's private key
 * @param recipientPublicKey Recipient's public key
 * @returns A wrapped Nostr event
 */
export function createGiftWrapEvent(content: any, senderPrivateKey: Uint8Array, recipientPublicKey: string): any {
  const rumor = nip59.createRumor(content, senderPrivateKey)
  const seal = nip59.createSeal(rumor, senderPrivateKey, recipientPublicKey)
  return nip59.createWrap(seal, recipientPublicKey)
}

/**
 * Unwrap a wrapped event.
 * @param wrappedEvent The wrapped Nostr event
 * @param recipientPrivateKey Recipient's private key
 * @returns The unwrapped rumor
 */
export function unwrapGiftWrapEvent(wrappedEvent: any, recipientPrivateKey: Uint8Array): any {
  return nip59.unwrapEvent(wrappedEvent, recipientPrivateKey)
}

/**
 * Unwrap multiple wrapped events.
 * @param wrappedEvents Array of wrapped Nostr events
 * @param recipientPrivateKey Recipient's private key
 * @returns An array of unwrapped rumors
 */
export function unwrapMultipleGiftWrapEvents(wrappedEvents: any[], recipientPrivateKey: Uint8Array): any[] {
  return nip59.unwrapManyEvents(wrappedEvents, recipientPrivateKey)
}
