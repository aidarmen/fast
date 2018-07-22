import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import axios from 'axios'

import studCourses from '../components/studCourses'
import studHome from '../components/studTable'


class Student extends Component {
	constructor(props){
		super(props)
    }

    render() {			
        return (
            <section>										
                <div className='bg_main'>
                <Switch>              
                    <Route exact path="/student/courses" component={studCourses}/> 
                    <Route exact path="/student/home" component={studHome}/>
                </Switch>
                </div>			
            </section>
        )
	}
}

export default Student