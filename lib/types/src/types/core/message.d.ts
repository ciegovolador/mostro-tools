import type { Order } from './order.ts';
export declare enum Action {
    NewOrder = "new-order",
    TakeSell = "take-sell",
    TakeBuy = "take-buy",
    PayInvoice = "pay-invoice",
    AddInvoice = "add-invoice",
    FiatSent = "fiat-sent",
    FiatSentOk = "fiat-sent-ok",
    Release = "release",
    Released = "released",
    Cancel = "cancel",
    Canceled = "canceled",
    WaitingBuyerInvoice = "waiting-buyer-invoice",
    WaitingSellerToPay = "waiting-seller-to-pay",
    BuyerTookOrder = "buyer-took-order",
    HoldInvoicePaymentAccepted = "hold-invoice-payment-accepted",
    HoldInvoicePaymentSettled = "hold-invoice-payment-settled",
    HoldInvoicePaymentCanceled = "hold-invoice-payment-canceled",
    CooperativeCancelInitiatedByYou = "cooperative-cancel-initiated-by-you",
    CooperativeCancelInitiatedByPeer = "cooperative-cancel-initiated-by-peer",
    CooperativeCancelAccepted = "cooperative-cancel-accepted",
    Rate = "rate",
    RateUser = "rate-user",
    RateReceived = "rate-received",
    Dispute = "dispute",
    DisputeInitiatedByYou = "dispute-initiated-by-you",
    DisputeInitiatedByPeer = "dispute-initiated-by-peer",
    CantDo = "cant-do",
    OutOfRangeFiatAmount = "out-of-range-fiat-amount",
    IsNotYourDispute = "is-not-your-dispute",
    NotFound = "not-found",
    IncorrectInvoiceAmount = "incorrect-invoice-amount",
    InvalidSatsAmount = "invalid-sats-amount",
    OutOfRangeSatsAmount = "out-of-range-sats-amount",
    PaymentFailed = "payment-failed",
    InvoiceUpdated = "invoice-updated"
}
export interface MessageContent {
    order?: Order;
    payment_request?: {
        order: Order | null;
        invoice: string;
        amount?: number;
    };
    text_message?: string;
    peer?: {
        pubkey: string;
    };
    rating_user?: {
        value: 1 | 2 | 3 | 4 | 5;
        confirmed: boolean;
    };
    dispute?: {
        id: string;
        buyer_token?: number;
        seller_token?: number;
    };
}
export interface MessageKind {
    version: number;
    request_id: number;
    id?: string;
    action: Action;
    content?: MessageContent;
}
export type Message = {
    type: 'order';
    message: MessageKind & {
        action: OrderActions;
    };
} | {
    type: 'dispute';
    message: MessageKind & {
        action: DisputeActions;
    };
} | {
    type: 'cant_do';
    message: MessageKind & {
        action: Action.CantDo;
    };
} | {
    type: 'rate';
    message: MessageKind & {
        action: RatingActions;
    };
};
type OrderActions = Action.NewOrder | Action.TakeSell | Action.TakeBuy | Action.PayInvoice | Action.AddInvoice | Action.FiatSent | Action.FiatSentOk | Action.Release | Action.Released | Action.Cancel | Action.Canceled | Action.WaitingBuyerInvoice | Action.WaitingSellerToPay | Action.BuyerTookOrder | Action.HoldInvoicePaymentAccepted | Action.HoldInvoicePaymentSettled | Action.HoldInvoicePaymentCanceled | Action.CooperativeCancelInitiatedByYou | Action.CooperativeCancelInitiatedByPeer | Action.CooperativeCancelAccepted;
type DisputeActions = Action.Dispute | Action.DisputeInitiatedByYou | Action.DisputeInitiatedByPeer;
type RatingActions = Action.Rate | Action.RateUser | Action.RateReceived;
export {};
