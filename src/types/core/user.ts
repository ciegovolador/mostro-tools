/**
 * User type definitions
 *
 * TODO: In future versions, the 'category' field will be replaced with a proper enum.
 * This will be implemented when user categories are fully defined in the protocol.
 * For now, we keep it as number to maintain compatibility with current implementation.
 */
export interface User {
  id: string
  pubkey: string
  is_admin: boolean
  is_solver: boolean
  is_banned: boolean
  category: number // Will be replaced with UserCategory enum in future versions
  created_at: number
}

// Helper functions to check user roles
export const isAdmin = (user: User): boolean => user.is_admin
export const isSolver = (user: User): boolean => user.is_solver
export const isBanned = (user: User): boolean => user.is_banned
