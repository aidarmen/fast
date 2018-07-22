import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'

import Head from './head'
import Group from './group'

class Groups extends Component{
    constructor(props){
        super(props)
    }

    render() {
        console.log(1)
        return (
            <section>
                <Head />
                <Group />
            </section>
        )
    }
}

export default Groups