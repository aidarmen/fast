import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'

import Head from './head'
import Course from './course'

class Courses extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        console.log(5)
        return ( 
            <section>
            <Head />
            <Course />
            </section>            
        )
    }
}

export default Courses