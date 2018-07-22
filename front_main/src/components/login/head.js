import React, {Component} from 'react'

import ContactUs from '../modals/contactUs'

class Head extends Component {
    
    render() {
    return(
        <div className="w_100 h_100">
            <div className="w_100 bg_00834f h_73px"> 
                <div className="color_white ff float_left ml_90px pt_25px w_86px fs_20">C{('{}')}deBase</div>
                <div className="color_white ff float_right mr_87px pt_25px fl-sb fs_15 pb_7px pointer"><ContactUs /></div>           
            </div>
        </div>
    )}
}

export default Head