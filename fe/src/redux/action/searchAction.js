export const SEARCH = 'SEARCH';

export function search(text) {
    return {
        type: SEARCH,
        text: text
    }
}
