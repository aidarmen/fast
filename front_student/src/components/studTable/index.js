import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'

import Head from './head'
import Info from './info'
import Table from './table'

class StudHome extends Component{
    constructor(props){
        super(props)
        
    }

    render(){        
        return (                        
            <section>				
				<Head/>				
				<Info/>
                <Table/> 
			</section>            
        )
    }
}

export default StudHome