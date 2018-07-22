import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {allCourse} from '../../actions/courseAction'

import AddC from '../modals/addC'

class Course extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         courses: []
    //     }
    // }

    componentWillMount(){
       this.props.allCourse()
    }
    componentDidMount(){
        this.props.allCourse()  
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newCourse){
            this.props.courses.push(nextProps.newCourse)
        }
    }

    render() {
        // const courseItems = this.props.courses.map(course => {            
        //     <div key={course.id} className='w_40 fl fl-c'>
        //         <div className="course_box bg_79d9b3 r_10px">
        //         <img src={course.course_img} className="course_img mt_40px" />
        //         <h1 className="color_white ff tac fs_45 fwb mt_17px">{course.course_name}</h1>
        //         </div>
        //     </div>           
        // })

        return (
                <div >
                    <div className='w_container fl p_tb_30px tac mt_60px'>
                        <div className='w_90 relative'>
                            <h1 className="color_white ff tac fs_65 fw_light ml_15">Выберите курс</h1>
                        </div>
                        <div className='w_40 absolute right_87px'>
                            <AddC />
                        </div>
                    </div>                    
                    <div className='w_container fl fl-wrap fl-aic tac mt_55px mb_30px '> 
                        {
                            this.props.courses ? this.props.courses.map((course,index) => (
                                <Link to={'/inner/groups/'+course._id} className='mt_25px w_32 fl fl-c tdn'>           
                                <div key={index} className='w_300px'>
                                    <div className="course_box bg_79d9b3 r_10px pointer">
                                    <img src={course.course_img} className="course_img mt_40px" />
                                    <h1 className="color_white ff tac fs_45 fwb mt_17px">{course.course_name}</h1>
                                    </div>
                                </div> </Link>))
                            :   null}                
                                              
                    </div>
                </div>
                )
    }
}

Course.propTypes = {
    allCourse: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    newCourse: PropTypes.object
}

const mapStateToProps = state => ({
    courses: state.courses.items,
    newCourse: state.courses.item
})

export default connect(mapStateToProps, {allCourse})(Course)
