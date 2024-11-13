export interface ClientConfig {
  mostroPubKey: string;
  relays: string[];
  privateKey?: string;
  debug?: boolean;
}
export * from './admin.ts';
export * from './disputes.ts';
export * from './messages.ts';
export * from './orders.ts';
