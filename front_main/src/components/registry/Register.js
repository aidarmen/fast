import React, { Component } from 'react'
import {signIn, signUp} from '../../actions/AuthActions'
import { Link } from 'react-router-dom'
export class Register extends Component {
 
    constructor(props){
        super(props);
        
        this.state = {            
                email: '',
                password: '',
                name: '',
                surname: '',
                telephone:'',
                age:'',
                password1: '',

          };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    validateForm() {     
        return this.state.email.length > 0 && this.state.password.length > 0 && ( this.state.password == this.state.password1 ) && this.state.name.length > 0 && this.state.surname.length > 0 && this.state.telephone.length > 0;
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
            password: this.state.password,
            name: this.state.name,
            surname: this.state.surname,
            telephone:this.state.telephone,
            age: this.state.age
        }
        signUp(user)       
    }

 
 
    render() {
    return (
      <div>
        <header>
        <div class="container">
            <div class="row d-flex justify-content-between align-items-center ">
                <div class=" ">
                    <img src="/img/logo.png" alt=""/>
                </div>
                <div class="col-2">
                <Link to={'/inner/login'}> <button type="button" class="btn btn-primary col-8">Login</button></Link>
                </div>
            </div>
        </div>
    </header>
    <section class="container">
        <div class="row d-flex justify-content-center ">

              <div class="d-flex justify-content-cente col-5 offset-2 mt-5">  <h1 class=" ">Registration</h1></div>
            <div class="row col-9">
                  


                <div class="col-5 mt-5">

                   
                    
                        <form action="/">
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input value={this.state.name} onChange={(e) => this.setState({...this.state, name: e.target.value})} type="text" class="form-control" id="name" placeholder="Enter name" name="name" required/>
                            </div>
                            <div class="form-group">
                                <label for="fname">Family:</label>
                                <input value={this.state.surname} onChange={(e) => this.setState({...this.state, surname: e.target.value})} type="text" class="form-control" id="fmname" placeholder="Enter family name" name="fname" required/>
                            </div>

                            

                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" value={this.state.email} onChange={(e) => this.setState({...this.state, email: e.target.value})} class="form-control" id="email" placeholder="Enter email" name="email" required/>
                            </div>

                            <div class="row">
                            <div class="form-group col-4">
                                <label for="age">Age</label>
                                <input type="age" value={this.state.age} onChange={(e) => this.setState({...this.state, age: e.target.value})} class="form-control" id="age" pattern="[0-9]{2}" title="only valid age" placeholder="0-99" name="email" required/>
                            </div>
                            <div class="form-group col-8">
                                    <label for="telephone">Telephone</label>
                                    <input type="tel" value={this.state.telephone} onChange={(e) => this.setState({...this.state, telephone: e.target.value})} class="form-control" name="telephone" placeholder="(707) 123-45678"  pattern="\([0-9]{3}\) [0-9]{3}[ -][0-9]{4}" title=" (123) 456-7891" required/>                                </div>
                        </div>

                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" value={this.state.password} onChange={(e) => this.setState({...this.state, password: e.target.value})} class="form-control" id="pwd" placeholder="Enter password" name="pwd" required/>
                        </div>

                        <div class="form-group">
                            <label for="password"> Repeat password:</label>
                            <input type="password" value={this.state.password1} onChange={(e) => this.setState({...this.state, password1: e.target.value})} class="form-control" id="password" placeholder="repeat password" name="email" required/>
                        
                        </div>



                        </form>

                    


                </div>



                <div class="col-5 offset-1 mt-5 ">

     
<form class="form mt-3">
      
            <div class="">
                <img src="/img/add.png" width="100%" height="50%" class=" z-depth-1-half "/>
                <div class="btn btn-mdb-color btn-rounded ">
                    
                    <input type="file" style={{visibility: 'hidden'}}/>
                </div>
            
            </div>
            <div class="d-flex justify-content-center">
                
            </div>
      
    </form>
    <button  disabled={!this.validateForm()} onClick={this.handleSubmit}   type="submit" class="btn btn-warning rounded-5 col-12">ok</button>

                </div>



            </div>
        </div>
    </section>
      </div>
    )
  }
}

export default Register
