// client.ts
function hello(name) {
  return `Hello ${name}! I am a cli :)`;
}
function dispute(name) {
  return `Hello ${name}! I am the core :)`;
}
function neworder(name) {
  return `Hello ${name}! I am the core :)`;
}
function takesell(name) {
  return `Hello ${name}! I am the core :)`;
}
function takebuy(name) {
  return `Hello ${name}! I am the core :)`;
}
function addinvoice(name) {
  return `Hello ${name}! I am the core :)`;
}
function getdm(name) {
  return `Hello ${name}! I am the core :)`;
}
function fiatsent(name) {
  return `Hello ${name}! I am the core :)`;
}
function release(name) {
  return `Hello ${name}! I am the core :)`;
}
function cancel(name) {
  return `Hello ${name}! I am the core :)`;
}
function rate(name) {
  return `Hello ${name}! I am the core :)`;
}
function admcancel(name) {
  return `Hello ${name}! I am the core :)`;
}
function admsettle(name) {
  return `Hello ${name}! I am the core :)`;
}
function admlistdisputes(name) {
  return `Hello ${name}! I am the core :)`;
}
function admaddsolver(name) {
  return `Hello ${name}! I am the core :)`;
}
function admtakedispute(name) {
  return `Hello ${name}! I am the core :)`;
}
function help(command) {
  let result = '';
  const commandList = `listorders, neworder, takesell, takebuy , addinvoice, getdm, fiatsent, release, cancel, rate, dispute, admcancel, admsettle, admlistdisputes, admaddsolver, admtakedispute`;
  switch (command) {
    case 'listorders':
      result = `Requests open orders from Mostro pubkey`;
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
      result = `Send fiat sent message to confirm payment to other user`;
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
      result = `we don't have that command; Choosea supported one (${commandList})`;
  }
  return result;
}
export {
  addinvoice,
  admaddsolver,
  admcancel,
  admlistdisputes,
  admsettle,
  admtakedispute,
  cancel,
  dispute,
  fiatsent,
  getdm,
  hello,
  help,
  neworder,
  rate,
  release,
  takebuy,
  takesell,
};
