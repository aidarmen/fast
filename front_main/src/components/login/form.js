import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {signIn, signUp} from '../../actions/AuthActions'
import { allCourses} from '../../actions/courseAction'

import axios from 'axios';

class Form extends Component{

    constructor(props){
        super(props);
        
        this.state = {            
                email: '',
                password: '',
                name: '',
                surname: '',
            active_form: 1
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
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            password: this.state.password
        }
        // console.log(user)
        signUp(user)
    }
    setActive(form){
		this.setState({active_form: form})
	}
    
    render() {
        return (
            <section className="grid grid-col-a-80-a grid-row-70-a ">
                <div className="grid grid-item4 grid-col-a-15-a ">
                    <div className="login-page grid-img1 ml-30 mt_50px">

                        {
                            this.state.active_form ==1
                            ?                       
                            <div className="form">
                            <div className="fl-c fl h_50px fs_30 color_white mb_10px">Вход</div>
                            <form>
                                <input  type="email"  value={this.state.email} onChange={(e) => this.setState({...this.state, email: e.target.value})} placeholder="email" />
                                <input   value={this.state.password} onChange={(e) => this.setState({...this.state, password: e.target.value})}  type="password" placeholder="password" />
                                <button disabled={!this.validateForm()} type="submit" className="loginbutton color_white" onClick={this.handleSubmit}>Войти</button>
                            </form>
                            <div className="fl fl_dr fl-c">
                                <div className="m-auto bg_white w-30 h-1px"></div>
                                <div className="fs_11 color_white pointer" >еще не зарегистрированы?</div>
                                <div className="m-auto bg_white w-30 h-1px"></div>
                            </div>
                            <div className={this.state.active_form == 2 ? 'registerbutton pointer' : 'registerbutton pointer'} onClick={() => this.setActive(2)}>Зарегистрироваться</div>
    
                            <div className="license">Регистрируясь, Вы соглашаетесь с условиями Лицензионного соглашения и положения о защите персональных данных</div>
                            </div>
                            : 
                            this.state.active_form == 2
                            ?
                            <div className="form">
                                <div className="jc-c flex h-50px font-size-30 color_white mb-10">Регистрация</div>
                                <form >
                                    <input className="mb-1" type="text" placeholder="name" value={this.state.name} onChange={(e) => this.setState({...this.state, name: e.target.value})}/>
                                    <input className="mb-1" type="surname" placeholder="surname" value={this.state.surname} onChange={(e) => this.setState({...this.state, surname: e.target.value})} />
                                    <input className="mb-1" type="email" placeholder="email" value={this.state.email} onChange={(e) => this.setState({...this.state, email: e.target.value})} />
                                    <input className="mb-1" type="password" placeholder="password" value={this.state.password} onChange={(e) => this.setState({...this.state, password: e.target.value})} />
                                    <button className="loginbutton color_white" type="submit" onClick={this.handleSubmit2}>Зарегистрироваться</button>
                                </form>
                                <div className="flex fl-dir-row jc-c grid    ">
                                    <div className="m-auto bg_col-white w-30 h-1px" ></div>
                                    <div className="font-size-11 col-white" >Уже зарегистрированы?</div>
                                    <div className="m-auto bg_col-white w-30 h-1px" ></div>
                                </div>
                                <div className={this.state.active_form == 1 ? 'registerbutton pointer' : 'registerbutton pointer'} onClick={() => this.setActive(1)}>Вход</div>
                                <div className="license">Регистрируясь Вы соглашаетесь с условиями Лицензионного соглашения и Положения о защите персональных данных</div>
                            </div>
                            :
                            null
                        }
                        
                    </div>
                    <div className=" grid-item1">
                        <img className="w-full" src="/img/desk.png" alt=""/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Form