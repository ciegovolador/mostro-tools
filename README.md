# mostro-tools

Tools for developing Mostro clients.

This package is only providing lower-level functionality.

## Roadmap

### Mostro Core Implementation

Implementation of core functionality in TypeScript/JavaScript. See [mostro-core](https://github.com/MostroP2P/mostro-core).

#### Core Functions:

- `dispute.ts` - Handles dispute resolution logic
- `lib.ts` - Core library utilities
- `message.ts` - Message handling functionality
- `order.ts` - Order management system
- `rating.ts` - User rating implementation
- `user.ts` - User management functionality

### Client Implementation

Implementation of core functionality in TypeScript/JavaScript. See [mostro-core](https://github.com/MostroP2P/mostro-cli).

#### Client Functions:

- `listorders` -Requests open orders from Mostro pubkey
- `neworder` -Create a new buy/sell order on Mostro
- `takesell` -Take a sell order from a Mostro pubkey
- `takebuy ` -Take a buy order from a Mostro pubkey
- `addinvoice` -Buyer add a new invoice to receive the payment
- `getdm ` -Get the latest direct messages from Mostro
- `fiatsent` -Send fiat sent message to confirm payment to other user
- `release ` -Settle the hold invoice and pay to buyer
- `cancel` -Cancel a pending order
- `rate` -Rate counterpart after a successful trade
- `dispute` -Start a dispute
- `admcancel` -Cancel an order (only admin)
- `admsettle` - Settle a seller's hold invoice (only admin)
- `admlistdisputes` -Requests open disputes from Mostro pubkey
- `admaddsolver` - Add a new dispute's solver (only admin)
- `admtakedispute` - Admin or solver take a Pending dispute (only admin)
- `help` -Print this message or the help of the given subcommand(s)
