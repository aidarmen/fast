import { ALL_COURSES, NEW_COURSE } from '../constants/courseConst'

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {

    switch (action.type) {
        case ALL_COURSES:
            
            return {
                ...state,
                items: action.payload
            }
        case NEW_COURSE:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}