import { ALL_GROUP, NEW_GROUP } from '../constants/groupConst'


import axios from 'axios'
import Api from './Api'
export function allGroup(type, payload) {
    Api.get('/api/groups/get')
        .then(groups =>
            dispatch({
                type: ALL_GROUP,
                payload: groups
            }))
}

export function newGroup({ startDate, lessonDays, group_name, duration, startTime, endTime, course_id }) {
    Api.post('/api/groups/create', {
        startDate: startDate,
        lessonDays: lessonDays,
        group_name: group_name,
        duration: duration,
        startTime: startTime,
        endTime: endTime,

    }).then(group => (dispatch) => ({
        type: NEW_GROUP,
        payload: group
    }))
}