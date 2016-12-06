export const ADD = 'ADD';
export const SUB = 'SUB';

export function add(text) {
    return {
        type: ADD,
        text: text
    }
}
export function sub(text) {
    return {
        type: SUB,
        text: text
    }
}
