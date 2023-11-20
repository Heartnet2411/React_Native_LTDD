export function add(value1, value2) {
    return {
        type: 'ADD',
        value1,
        value2
    }
}

export function sub(value1, value2) {
    return {
        type: 'SUB',
        value1,
        value2
    }
}

export function mul(value1, value2) {
    return {
        type: 'MUL',
        value1,
        value2
    }
}

export function div(value1, value2) {
    return {
        type: 'DIV',
        value1,
        value2
    }
}