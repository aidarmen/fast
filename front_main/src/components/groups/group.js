import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { allGroup } from '../../actions/groupAction'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import AddG from '../modals/addG'

class Group extends Component {
    constructor(props){
        super(props)
        this.state = {
            groups: []
        }
    }


    render() {
        const groupItems = this.props.groups.map(group => {
            <div className='w_container fl fl-c block tac mt_80px'>
               <div key={group.id} className='w_40 fl fl-c'>
                    <div className="group_box bg_79d9b3 r_5px">
                        <h1 className="color_white ff tac fs_45 fwb mt_40px">{group.group_name}</h1>
                    </div>
                </div> 
            </div>
        })
        return (
            <div> 
                <div className='w_container fl fl-fe absolute right_87px'>
                    <AddG />
                </div>
                {groupItems}
                <div className='w_container fl fl-c tac mt_80px'>
                <div className='w_40 fl fl-c'>
                        <div className="group_box bg_79d9b3 r_5px">
                            <h1 className="color_white ff tac fs_45 fwb mt_40px">HTML</h1>
                        </div>
                    </div>
                    <div className='w_40 fl fl-c'>
                        <div className="group_box bg_79d9b3 r_5px">
                            <h1 className="color_white ff tac fs_45 fwb mt_40px">CSS</h1>
                        </div>
                    </div>
                    <div className='w_40 fl fl-c'>
                        <div className="group_box bg_79d9b3 r_5px">
                            <h1 className="color_white ff tac fs_45 fwb mt_40px">JS</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Group.propTypes = {
    allGroup: PropTypes.func.isRequired,
    groups: PropTypes.array.isRequired,
    newGroup: PropTypes.object
}

const mapStateToProps = state => ({
    groups: state.groups.items,
    newGroup: state.groups.item
})

export default connect(mapStateToProps, {allGroup})(withRouter(Group))