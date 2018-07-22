import React, { Component } from 'react'

export class Reset extends Component {

    constructor(props){
        super(props);
        
        this.state = {            
                email: ''
               
          };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    validateForm() {     
        return this.state.email.length > 0 ;
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
          
        }
           
    }

  
        // console.log(user)
       


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
                    <button type="button" class="btn btn-primary col-8">Login  </button>
                </div>
            </div>
        </div>
    </header>
    <section class="container d-flex justify-content-center align-items-center">

        <div class="row mt-5 ">
            <div class="col-12 row d-flex justify-content-center mt-5 ">
                <h4 class="mb-5">Reset Password</h4>
                <form action="/action_page.php" class="col-12">

                    
                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" required/>
                        </div>

                        <div class="form-group">
                            <label for="password"> Repeat password:</label>
                            <input type="password" class="form-control" id="password" placeholder="repeat password" name="email" required/>
                        
                        </div>
                        
                        <button disabled={!this.validateForm()} onClick={this.handleSubmit} type="button" class=" mt-4 btn btn-warning rounded-5 col-12">ok</button>




                </form>
            </div>
        </div>

    </section>
      </div>
    )
  }
}

export default Reset
