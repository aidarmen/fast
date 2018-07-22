import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'


import createHistory from 'history/createBrowserHistory'
const history = createHistory()

import configureStore from './store/configureStore'
const store = configureStore(true)

import Inner from './containers/Inner'

import axios from 'axios'

render( 
    <Provider store = { store }>
        <ConnectedRouter history = { history } >
            <Switch>
                <Route path = '/inner' component = { Inner }/>				
            </Switch> 
        </ConnectedRouter> 
    </Provider>,
    document.getElementById('root')
)