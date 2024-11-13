export * from './client/index.ts';
export * from './core/index.ts';

export const NOSTR_CONSTANTS = {
  REPLACEABLE_EVENT_KIND: 38383,
  PROTOCOL_VERSION: 1,
  TIMEOUTS: {
    ORDER_EXPIRATION: 23 * 60 * 60,
    INVOICE_SUBMISSION: 15 * 60,
    HOLD_INVOICE_EXPIRATION: 24 * 60 * 60,
  },
} as const;
