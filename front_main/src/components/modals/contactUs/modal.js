import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'

class Modal extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:"",
            email: "",
            phone:""
          };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
	}
	    
    validateForm() {     
        return this.state.email.length > 0 && ( this.state.name.length > 0 || this.state.phone.length > 0   );
    }

    handleChange = event => {
        this.setState({
          display: !this.state.display,
          [event.target.id]: event.target.value
        });        
    }

    handleSubmit = event => {
        event.preventDefault();        
        const guest = {
            email:this.state.email,
            name: this.state.name,
            phone: this.state.phone
        }

        console.log(guest);

        axios
        .post('api/contactUs', guest)
        .then(res => console.log(res.data))
        .catch(err => this.setState({errors: err.response.data}));
    }
    

    render() {
        return(
            // <div>bebebe</div>
            <div className="show-modal">
               <div className="blackscreen" ></div>
                <div className="modal-content contact-us">                
                <span className="close color_black" onClick={() => this.props.closeModal()}>&times;</span>
                    <br/>
                    <h1 className="color_black ff fs_20 tac mt_25px ">Свяжитесь с нами</h1>
                    <br/>
                    <form onSubmit={this.handleSubmit} action="/action_page.php">            
                        <input  onChange={(e) => this.setState({ name: e.target.value})} value={this.state.name} type="name" id="name" name="name" placeholder="Name"/>
                        <br/>        
                        <input   onChange={(e) => this.setState({ email: e.target.value})}  value={this.state.email} type="email" id="email" name="email" placeholder="Email"/>
                        <br/>
                        <input  onChange={(e) => this.setState({ phone: e.target.value})} value={this.state.phone} type="tel" id="phone" name="phone" placeholder="Phone" />
                        <input disabled={!this.validateForm()}  type="submit" value="Submit"/>
                    </form>               
                </div>
            </div>
        )
    }
}


export default Modal