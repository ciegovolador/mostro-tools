

export function hello(name: string): string {

    return `Hello ${name}! I am the core :)`
}

export function dispute(name: string): string {

    return `Hello ${name}! I am the core :)`
}

export function lib(name: string): string {

    return `Hello ${name}! I am the core :)`
}

export function message(name: string): string {

    return `Hello ${name}! I am the core :)`
}


export function order(name: string): string {

    return `Hello ${name}! I am the core :)`
}


export function rating(name: string): string {

    return `Hello ${name}! I am the core :)`
}


export function user(name: string): string {

    return `Hello ${name}! I am the core :)`
}

export function help(command: string): string {
    let result = ''

    switch (command) {
        case 'dispute':
            result = "Handles dispute resolution logic"
            break;
        case 'lib':
            result = "Core library utilities";
            break;
        case 'message':
            result = "Message handling functionality";
            break;
        case 'order':
            result = "Order management system";
            break;
        case 'rating':
            result = "User rating implementation";
            break;
        case 'user':
            result = "User management functionality";
            break;
        default:
            result = "we don't have that command; Choosea supported one (dispute, lib, message, order. rating, user)"
    }
    return result
}





