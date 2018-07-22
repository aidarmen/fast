import React, { Component } from 'react'
import {signIn, signUp} from '../../actions/AuthActions'
import { Link } from 'react-router-dom'
export class login extends Component {
    constructor(props){
        super(props);
        
        this.state = {            
                email: '',
                password: '',
                name: '',
                surname: ''
          };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    validateForm() {     
        return this.state.email.length > 0 && this.state.password.length > 0;
      }   
    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        })       
      }
    handleSubmit = event => {
        event.preventDefault();        
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        signIn(user)       
    }

    handleSubmit2 = event => {
        event.preventDefault()
        const user = {
           
            email: this.state.email,
            password: this.state.password
        }
        // console.log(user)
        signUp(user)
    }
   
  
  
  
    render() {
    return (
      <div>
        
        

    <header>
        <div class="container">
            <div class="row d-flex justify-content-between align-items-center col-12 ">
                <div class=" ">
                    <img src="/img/logo.png" alt=""/>
                </div>
                <div class="col-2">
                <Link to={'/inner/registry'}>     <button type="button" class="btn btn-primary col-8">Register</button></Link>
                </div>
            </div>
        </div>
    </header>
    <section class="container d-flex justify-content-center align-items-center">

        <div class="row mt-5  ">
            <div class=" row d-flex justify-content-center mt-5 ">
                <h4 class="mb-3">Login</h4>
                <form action="/" class="col-12">

                    <div class="form-group">
                            <label for="email">Email:</label>
                            <input value={this.state.email} onChange={(e) => this.setState({...this.state, email: e.target.value})} type="email" class="form-control" id="email" placeholder="Enter email" name="email" required/>
                        </div>

                        <div class="form-group">
                            <label for="password">  password:</label>
                            <input value={this.state.password} onChange={(e) => this.setState({...this.state, password: e.target.value})} type="password" class="form-control" id="password" placeholder="repeat password" name="email" required/>
                        
                        </div>
                        <span class="">Forgot <Link to={'/inner/forgot'}> <a href="#">password?</a> </Link></span>
                        <button   disabled={!this.validateForm()} onClick={this.handleSubmit} type="submit" class=" mt-4 btn btn-warning rounded-5 col-12">ok</button>




                </form>
            </div>
        </div>

    </section>



      </div>
    )
  }
}

export default login
