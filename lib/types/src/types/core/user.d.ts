/**
 * User type definitions
 *
 * TODO: In future versions, the 'category' field will be replaced with a proper enum.
 * This will be implemented when user categories are fully defined in the protocol.
 * For now, we keep it as number to maintain compatibility with current implementation.
 */
export interface User {
  id: string;
  pubkey: string;
  is_admin: boolean;
  is_solver: boolean;
  is_banned: boolean;
  category: number;
  created_at: number;
}
export declare const isAdmin: (user: User) => boolean;
export declare const isSolver: (user: User) => boolean;
export declare const isBanned: (user: User) => boolean;
