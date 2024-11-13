export interface DisputeFunctions {
  dispute: (orderId: string) => Promise<void>;
  rate: (orderId: string, rating: 1 | 2 | 3 | 4 | 5) => Promise<void>;
}
