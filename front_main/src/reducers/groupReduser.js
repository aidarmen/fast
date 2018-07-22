import { ALL_GROUP, NEW_GROUP } from '../constants/groupConst'

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {

    switch (action.type) {
        case ALL_GROUP:
            return {
                ...state,
                items: action.payload
            }
        case NEW_GROUP:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}