import React, {Component} from 'react'

class Crs extends Component {
    render() {
        return (
            <div className='w_40 fl fl-c'>
                <div className="w_320px h_340px border_corse r_10px">
                    {/* <img src={this.props.date.photo} className="course_img mt-25px" /> */}
                    {/* <h1 className="color_white ff tac fs_45 fwb mt_17px">{this.props.date.course_name}</h1> */}
                    <div className="h_75px">                    
                    <button className="bg_00bc71 tac color_white w_150px h_40px r_40px mt_10px bn ff fs_20">вход</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Crs