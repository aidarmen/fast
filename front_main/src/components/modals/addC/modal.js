import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import PropTypes from 'prop-types'
import { newCourse } from '../../../actions/courseAction'



class Modal extends Component{
    constructor(props){
        super(props)
        this.state ={
            course_img: null,
            course_name: ''
            
        }  
        this.onClick = this.onClick.bind(this)
        this.fileChangedHandler = this.fileChangedHandler.bind(this)
        
    }
    fileChangedHandler = event => {        
        this.setState({
            course_img: ({course_img: event.target.files[0]})
        })
        console.log(event.target.files[0])
    }

    onClick = event => {
        event.preventDefault()

        const formData = new FormData()
        formData.append("image", this.state.course_img.course_img)
        axios.post('/uploads', formData)
        .then(
            res => {
                const course = {
                    course_img: res.data.url,
                    course_name: this.state.course_name
                } 
                newCourse(course)
                this.props.closeModal()
                // console.log(res.data.url)
            })
             
    }

    render() {
        return(
            <div className="show-modal">
                        <div className="blackscreen" ></div>
                <div className="modal-content">
                    <span className="close" onClick={() => this.props.closeModal()}>&times;</span>
                    <br/>
                    <h1 className="color_black ff fs_20 tac mt_25px ">Создание курса</h1>
                    <br/>                   
                    <img src="/img/empty.png" alt="" className="img_b50 h_70px w_70px fl "/>
                    <div className="tac"><label htmlFor="file" className="color_42a5f5 tdn pointer">Добавить фотографию</label><input name="image" id="file" type="file" onChange={this.fileChangedHandler}  style={{"display": "none"}} /></div>
                    <br/><br/>
                    <input type="text" className="bn w_10 ml_10px w_350px" placeholder="Название курса" value={this.state.course_name} onChange={(e) => this.setState({  course_name: e.target.value})}/>
                    <br/><br/><br/>
                    <button className="bg_fe8f33 w_225px h_35px bn r_3px mac fl fl-c color_white tac ttu ff fs_15 pointer" onClick = {this.onClick}>Создать</button>
                    <br/><br/>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    newCourse: PropTypes.func.isRequired
}

export default connect(null, {newCourse})(Modal)