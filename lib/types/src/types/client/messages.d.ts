import type { MessageKind } from '@/types/core/index.ts';
export interface MessageFunctions {
    getdm: (pubkey: string) => Promise<MessageKind[]>;
    fiatsent: (orderId: string) => Promise<void>;
    addinvoice: (orderId: string, invoice: string) => Promise<void>;
    release: (orderId: string) => Promise<void>;
}
