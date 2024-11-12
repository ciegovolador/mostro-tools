
export function hello(name: string): string {

    return `Hello ${name}! I am a cli :)`
}


export function dispute(): string {

    return `Hello ${name}! I am the core :)`
}

export function neworder(): string {

    return `Hello ${name}! I am the core :)`
}

export function takesell(): string {

    return `Hello ${name}! I am the core :)`
}


export function takebuy(): string {

    return `Hello ${name}! I am the core :)`
}


export function addinvoice(): string {

    return `Hello ${name}! I am the core :)`
}

export function getdm(): string {

    return `Hello ${name}! I am the core :)`
}

export function fiatsent(): string {

    return `Hello ${name}! I am the core :)`
}
export function release(): string {

    return `Hello ${name}! I am the core :)`
}
export function cancel(): string {

    return `Hello ${name}! I am the core :)`
}
export function rate(): string {

    return `Hello ${name}! I am the core :)`
}
export function admcancel(): string {

    return `Hello ${name}! I am the core :)`
}
export function admsettle(): string {

    return `Hello ${name}! I am the core :)`
}
export function admlistdisputes(): string {

    return `Hello ${name}! I am the core :)`
}
export function admaddsolver(): string {

    return `Hello ${name}! I am the core :)`
}
export function admtakedispute(): string {

    return `Hello ${name}! I am the core :)`
}

export function help(command: string): string {
    let result = ''
    const commandList = `listorders, neworder, takesell, takebuy , addinvoice, getdm, fiatsent, release, cancel, rate, dispute, admcancel, admsettle, admlistdisputes, admaddsolver, admtakedispute`
    switch (command) {
        case 'listorders':
            result = `Requests open orders from Mostro pubkey`
            break;
        case 'neworder':
            result = `Create a new buy/sell order on Mostro`;
            break;
        case 'takesell':
            result = `Take a sell order from a Mostro pubkey`;
            break;
        case 'takebuy':
            result = `Take a buy order from a Mostro pubkey`;
            break;
        case 'addinvoice':
            result = `Buyer add a new invoice to receive the payment`;
            break;
        case 'getdm':
            result = `Get the latest direct messages from Mostro`;
            break;
        case 'fiatsent':
            result = `Send fiat sent message to confirm payment to other user`
            break;
        case 'release':
            result = `Settle the hold invoice and pay to buyer`;
            break;
        case 'cancel':
            result = `Cancel a pending order`;
            break;
        case 'rate':
            result = `Rate counterpart after a successful trade`;
            break;
        case 'dispute':
            result = `Start a dispute`;
            break;
        case 'admcancel':
            result = `Cancel an order (only admin)`;
            break;
        case 'admsettle':
            result = `Settle a seller's hold invoice (only admin)`;
            break;
        case 'admlistdisputes':
            result = `Requests open disputes from Mostro pubkey`;
            break;
        case 'admaddsolver':
            result = `Add a new dispute's solver (only admin)`;
            break;
        case 'admtakedispute':
            result = `Admin or solver take a Pending dispute (only admin)`;
            break;
        default:
            result = `we don't have that command; Choosea supported one (${commandList})`
    }
    return result
}






