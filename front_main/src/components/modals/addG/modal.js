import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';
import { newGroup } from '../../../actions/groupAction'
import propTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import 'react-datepicker/dist/react-datepicker.css';

class Modal extends Component{
    constructor(props){
        super(props)
        this.state = {
            startDate: moment(),
            lessonDays: Array(7).fill(false),
            group_name: '',            
            duration: '',
            startTime: Date(),
            endTime: Date(),
            course_id: ''
          }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this) 
        this.onClick = this.onClick.bind(this)         
        }
        
        
        handleChange(date) {
          this.setState({
            startDate: date
          });
        } 

        handleClick(e) {
           let id = e.target.getAttribute('data-id')
           let newLessonDays = this.state.lessonDays.slice()
           newLessonDays[id] = !newLessonDays[id] 
           this.setState({
            lessonDays:newLessonDays
           })
        }  

        onClick(e) {
            e.preventDefault()
            const group = {
                startDate: this.state.startDate,
                lessonDays: this.state.lessonDays,
                group_name: this.state.group_name,            
                duration: this.state.duration,
                startTime:  this.state.startTime,
                endTime: this.state.endTime,
                course_id: this.props.match.params.id
            }
            newGroup(group)
            this.props.closeModal()            
        }
     
        
       

    render() {
        const buttons = [
            {
                _id: 0,
                text: "пн"
            },
            {
                _id: 1,
                text: "вт"
            },
            {
                _id: 2,
                text: "ср"
            },
            {
                _id: 3,
                text: "чт"
            },
            {
                _id: 4,
                text: "пт"
            },
            {
                _id: 5,
                text: "сб"
            },
            {
                _id: 6,
                text: "вс"
            }
        ] 
  
        return(            
            <div className="show-modal">
                <div className="modal-content">
                    <span className="close" onClick={() => this.props.closeModal()}>&times;</span>
                    <br/>                    
                    <h1 className="color_black ff fs_20 tac mt_25px ">Создание группы</h1>
                    <br/><br/>
                    <input type="text" className="bn w_350px ml_10px" placeholder="Название группы" value={this.state.group_name} onChange={(e) => this.setState({...this.state, group_name: e.target.value})}/>
                    <br/><br/>
                    <div className="fl fl_aib">
                    <p className="color_black ff fs_15 ml_10px">Дата начала: </p>
                     <DatePicker className="border_1 r_3px ml_10px w_100px tac color_4b4b49"
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        type="text"
                    /></div>
                    <br/>
                    <p className="color_black ff fs_15 ml_10px">Продолжительность:
                        <select className="border_1 r_3px ff fs_15 color_4b4b49 ml_10px w_120px tac h_35px" onChange={(e) => this.setState({ duration: e.target.value})}>                    
                                <option value="4">4 недель</option>
                                <option value="6">6 недель</option>
                                <option value="8">8 недель</option>                    
                        </select>
                    </p>
                    <br/>
                    <p className="color_black ff fs_15 ml_10px">Дни занятия</p>
                    <br/>                    
                    <div className="fl w_360px right fs_15 pointer">
                        {
                           buttons.map( (button, index) => (
                            <div className="ml_10px w_40px cc tac border_day r_3px h_25px ff ttu" data-id={button._id} key={index} onClick={this.handleClick} className={this.state.lessonDays[button._id] ? 'bg_79d9b3 ml_10px w_40px cc tac border_day r_3px h_25px ff ttu':'ml_10px w_40px cc tac border_day r_3px h_25px ff ttu'}>
                            {button.text} 
                            </div>                            
                        ))
                        }
                    </div>
                    <br/>
                    <p className="color_black ff fs_15 ml_10px">Время</p>
                    <br/>

                    <p className="color_black ff fs_15 ml_10px">
                        от <input type="time" className="bn w_30 ml_10px tac" value={this.state.startTime} onChange={(e) => this.setState({...this.state, startTime: e.target.value})} required /> 
                        до <input type="time" className="bn w_30 ml_10px tac" value={this.state.endTime} onChange={(e) => this.setState({...this.state, endTime: e.target.value})} required />
                    </p>

                    <br/><br/>

                    <button className="bg_fe8f33 w_225px h_35px bn r_3px mac fl fl-c color_white tac ttu ff fs_15 pointer" onClick={this.onClick}>Создать</button>
                    <br/><br/>
                </div>
            </div>
        )
    }    
}




export default connect(null, {newGroup})(withRouter(Modal))

