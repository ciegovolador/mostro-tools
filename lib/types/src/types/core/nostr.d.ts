export interface Rumor {
  id: string;
  pubkey: string;
  created_at: number;
  kind: number;
  tags: string[][];
  content: string;
}
export interface Seal {
  id: string;
  pubkey: string;
  created_at: number;
  kind: 13;
  tags: string[][];
  content: string;
  sig: string;
}
export interface GiftWrap {
  id?: string;
  pubkey: string;
  created_at: number;
  kind: 1059;
  tags: string[][];
  content: string;
  sig?: string;
}
