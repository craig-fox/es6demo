import { NEW_NAME, CLEAR_NAME, PREVIOUS_NAME } from '../actions/index'

export default function company(state = {name:'', oldName:''}, action) {
    let newState = Object.assign({}, state);
    newState.oldName = state.name
    switch (action.type) {
        case NEW_NAME:
            newState.name = action.payload
            return newState
        case CLEAR_NAME:
            newState.name = ''
            return newState
        case PREVIOUS_NAME:
            newState.name = state.oldName
            return newState
        default:
            return newState
    }
}
