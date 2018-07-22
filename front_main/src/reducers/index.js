import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import courseReduser from './courseReduser'
import groupReduser from './groupReduser'

export default combineReducers({
    routing: routerReducer,
    courses: courseReduser,
    groups: groupReduser
})