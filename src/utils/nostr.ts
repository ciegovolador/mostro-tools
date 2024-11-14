import { SimplePool, nip59 } from 'nostr-tools';

const pool = new SimplePool();

/**
 * Publish an event to a specific relay.
 * @param event The event object to publish.
 * @param relayUrl The relay URL to publish the event to.
 */
export async function publishEvent(event: any, relayUrl: string): Promise<void> {
  try {
    const results = await Promise.all(pool.publish([relayUrl], event));

    const success = results.every(result => result === 'ok');
    if (success) {
      console.log(`Event successfully published to ${relayUrl}`);
    } else {
      console.error(`Failed to publish event to some relays.`);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error publishing event: ${error.message}`);
    } else {
      console.error(`Unknown error publishing event.`);
    }
    throw error;
  }
}

/**
 * Create a wrapped event using NIP-59.
 * @param content The event content.
 * @param senderPrivateKey Sender's private key.
 * @param recipientPublicKey Recipient's public key.
 * @returns A wrapped Nostr event.
 */
export function createGiftWrapEvent(content: any, senderPrivateKey: Uint8Array, recipientPublicKey: string): any {
  const rumor = nip59.createRumor(content, senderPrivateKey);
  const seal = nip59.createSeal(rumor, senderPrivateKey, recipientPublicKey);
  return nip59.createWrap(seal, recipientPublicKey);
}

/**
 * Unwrap a wrapped event.
 * @param wrappedEvent The wrapped Nostr event.
 * @param recipientPrivateKey Recipient's private key.
 * @returns The unwrapped rumor.
 */
export function unwrapGiftWrapEvent(wrappedEvent: any, recipientPrivateKey: Uint8Array): any {
  return nip59.unwrapEvent(wrappedEvent, recipientPrivateKey);
}

/**
 * Unwrap multiple wrapped events.
 * @param wrappedEvents Array of wrapped Nostr events.
 * @param recipientPrivateKey Recipient's private key.
 * @returns An array of unwrapped rumors.
 */
export function unwrapMultipleGiftWrapEvents(wrappedEvents: any[], recipientPrivateKey: Uint8Array): any[] {
  return nip59.unwrapManyEvents(wrappedEvents, recipientPrivateKey);
}
