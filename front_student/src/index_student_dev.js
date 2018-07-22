import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import '../../assets/styles/index.css'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

import configureStore from './store/configureStore'
const store = configureStore(true)


import axios from 'axios'
import student from './containers/Student'

console.log(111)
render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>				
				<Route path='/student' component={student} />				
			</Switch>
		</ConnectedRouter>
	</Provider>,
    document.getElementById('boot')
)