export interface User {
  id: string
  pubkey: string
  is_admin: boolean
  is_solver: boolean
  is_banned: boolean
  category: number
  created_at: number
}
