import { ALL_COURSES, NEW_COURSE } from '../constants/courseConst'
import axios from 'axios';
import Api from './Api'

export function allCourse() {
    console.log(11)
    return function(dispatch) {
        Api.get('/api/courses/getall', {
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

export function newCourse({ course_name, course_img }) {
    // localStorage.getItem('a')
    // console.log("1111", course_img)
    Api.post('/api/courses/create', {
            course_name: course_name,
            course_img: course_img
        })
        .then(course => (dispatch) => ({
            type: NEW_COURSE,
            payload: course
        }))

}