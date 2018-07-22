import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'

import Form from './form'
import Head from './head'

class Login extends Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log(7)
        return(
            <section>
                <Head />
                <Form />
            </section>
        )
    }
}

export default Login