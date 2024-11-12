// client.ts
function hello(name2) {
  return `Hello ${name2}! I am a cli :)`;
}
function dispute() {
  return `Hello ${name}! I am the core :)`;
}
function neworder() {
  return `Hello ${name}! I am the core :)`;
}
function takesell() {
  return `Hello ${name}! I am the core :)`;
}
function takebuy() {
  return `Hello ${name}! I am the core :)`;
}
function addinvoice() {
  return `Hello ${name}! I am the core :)`;
}
function getdm() {
  return `Hello ${name}! I am the core :)`;
}
function fiatsent() {
  return `Hello ${name}! I am the core :)`;
}
function release() {
  return `Hello ${name}! I am the core :)`;
}
function cancel() {
  return `Hello ${name}! I am the core :)`;
}
function rate() {
  return `Hello ${name}! I am the core :)`;
}
function admcancel() {
  return `Hello ${name}! I am the core :)`;
}
function admsettle() {
  return `Hello ${name}! I am the core :)`;
}
function admlistdisputes() {
  return `Hello ${name}! I am the core :)`;
}
function admaddsolver() {
  return `Hello ${name}! I am the core :)`;
}
function admtakedispute() {
  return `Hello ${name}! I am the core :)`;
}
function help(command) {
  let result = "";
  const commandList = `listorders, neworder, takesell, takebuy , addinvoice, getdm, fiatsent, release, cancel, rate, dispute, admcancel, admsettle, admlistdisputes, admaddsolver, admtakedispute`;
  switch (command) {
    case "listorders":
      result = `Requests open orders from Mostro pubkey`;
      break;
    case "neworder":
      result = `Create a new buy/sell order on Mostro`;
      break;
    case "takesell":
      result = `Take a sell order from a Mostro pubkey`;
      break;
    case "takebuy":
      result = `Take a buy order from a Mostro pubkey`;
      break;
    case "addinvoice":
      result = `Buyer add a new invoice to receive the payment`;
      break;
    case "getdm":
      result = `Get the latest direct messages from Mostro`;
      break;
    case "fiatsent":
      result = `Send fiat sent message to confirm payment to other user`;
      break;
    case "release":
      result = `Settle the hold invoice and pay to buyer`;
      break;
    case "cancel":
      result = `Cancel a pending order`;
      break;
    case "rate":
      result = `Rate counterpart after a successful trade`;
      break;
    case "dispute":
      result = `Start a dispute`;
      break;
    case "admcancel":
      result = `Cancel an order (only admin)`;
      break;
    case "admsettle":
      result = `Settle a seller's hold invoice (only admin)`;
      break;
    case "admlistdisputes":
      result = `Requests open disputes from Mostro pubkey`;
      break;
    case "admaddsolver":
      result = `Add a new dispute's solver (only admin)`;
      break;
    case "admtakedispute":
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
  takesell
};
