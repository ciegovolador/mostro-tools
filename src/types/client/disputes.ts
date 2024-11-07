export interface DisputeFunctions {
  dispute: (orderId: string) => Promise<void>
  rate: (orderId: string, rating: number) => Promise<void>
}
