import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import axios from 'axios'

import Login from '../components/loginP/login'
import Register from '../components/registry/Register'
import Reset from '../components/reset/Reset'
import Mainscreen from '../components/mainScreen/MainScreen'
import Forgot from '../components/reset/Forgot'
class Inner extends Component {
	constructor(props){
		super(props)
	}
	render() {			
		return (
			<section>										
				<div className=''>
				<Switch>
					<Route path="/inner/login" component={Login}/>
					<Route path="/inner/registry" component={Register}/>
					<Route path="/inner/reset" component={Reset}/>
					<Route path="/inner/mainscreen" component={Mainscreen}/>
					<Route path="/inner/forgot" component={Forgot}/>
				
				</Switch>
				</div>
			</section>
		)
	}
}

export default Inner