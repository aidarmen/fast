import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/Auth'


import axios from 'axios'
import Api from './Api'

import createHistory from 'history/createBrowserHistory'
const history = createHistory({ forceRefresh: true })


export function signIn({ email, password }) {
    Api.post('/auth/signin', {
        email: email,
        password: password
    }).then((response) => {
        const localData = {
            id: response.data.data.user._id,
            email: response.data.data.user.email
		
			
        }
        localStorage.setItem('token', response.data.data.token)
        history.push('/inner/mainscreen')

    }).catch((err) => {
		// newNotificationActions(dispatch, 'auth_bad_credentials')
        console.log(err)
        console.log('stupid')
    })

}

export function signUp({ email, password, name, surname, age, telephone }) {

    console.log(12)
    Api.post('/auth/signup', {
        email: email,
        password: password,
        name: name,
        surname: surname,
        age: age,
        telephone: telephone,


    }).then((response) => {
        const localData = {
            id: response.data.data.user._id,
            email: response.data.data.user.email
         
        }

        localStorage.setItem('token', response.data.data.token)

        history.push('/inner/mainscreen')

    }).catch((err) => {
        // newNotificationActions(dispatch, 'auth_already_registered')
    })

}

export function logout() {
    return function(dispatch) {
        localStorage.removeItem('token')

        history.push('/auth/signin')
    }
}

///////////////////////////////////
// export function me() {
//     return function(dispatch) {
//         Api.get('/api/auth/me')
//             .then((response) => {
//                 dispatch({
//                     type: LOGIN_SUCCESS,
//                     payload: response.data
//                 })
//             }).catch((err) => {
//                 history.push('/auth/signin')
//             })
//     }
// }