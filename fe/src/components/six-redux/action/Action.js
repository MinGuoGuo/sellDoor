/**
 * Created by fangjie04 on 2016/12/5.
 */

export const SEARCH = 'SEARCH'

export function search(text) {
    return {
        type: SEARCH,
        payload: text
    }
}
