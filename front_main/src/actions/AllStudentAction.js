import Api from './Api'

import createHistory from 'history/createBrowserHistory'



export function allCourse() {
    console.log(11)
    return function(dispatch) {
        Api.get('/api/groups/get_users_in_group/:group_id', {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
            .then(courses => {
                dispatch({
                    type: ALL_COURSES,
                    payload: courses.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

