'use strict';
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// client.ts
var client_exports = {};
__export(client_exports, {
  addinvoice: () => addinvoice,
  admaddsolver: () => admaddsolver,
  admcancel: () => admcancel,
  admlistdisputes: () => admlistdisputes,
  admsettle: () => admsettle,
  admtakedispute: () => admtakedispute,
  cancel: () => cancel,
  dispute: () => dispute,
  fiatsent: () => fiatsent,
  getdm: () => getdm,
  hello: () => hello,
  help: () => help,
  neworder: () => neworder,
  rate: () => rate,
  release: () => release,
  takebuy: () => takebuy,
  takesell: () => takesell,
});
module.exports = __toCommonJS(client_exports);
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
