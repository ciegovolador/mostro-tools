export interface ClientConfig {
  mostroPubKey: string
  relays: string[]
  privateKey?: string
  debug?: boolean
}

export * from './admin'
export * from './disputes'
export * from './messages'
export * from './orders'
