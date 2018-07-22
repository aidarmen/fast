import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'

import Head from './head'
import Courses from './courses'

class StudCourses extends Component{
    constructor(props){
        super(props)
        
    }

    render(){        
        return (                        
            <section>				
				<Head/>				
				<Courses/> 
			</section>            
        )
    }
}

export default StudCourses