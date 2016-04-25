export const NEW_NAME = 'NEW_NAME'
export const CLEAR_NAME = 'CLEAR_NAME'
export const PREVIOUS_NAME = 'PREVIOUS_NAME'

export function setNewName(value) {
    return {
        type: NEW_NAME,
        payload: value
    }
}

export function clearName() {
    return {
        type: CLEAR_NAME
    }
}

export function previousName(){
    return {
        type: PREVIOUS_NAME
    }
    
}