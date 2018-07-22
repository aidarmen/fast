import React, {Component} from 'react'

import Modal from './modal'

class ContactUs extends Component{
    constructor(props){
        super(props)
        this.state = {
            show_modal: false,
            close_block: false
        }
    }

    render() {
        return(
            <div> 
                {
					!this.state.close_block
					?
					<div className="fl jc-sa w_20px fl_dr fl_aic">
                        <div onClick={() => this.setState({show_modal: true})} className="fl jc-sa w_60px pointer ">
                            <img className="icon mr_10px pb_-5px va_5px" src="/img/call.png" alt=""/>свяжитесь с нами
                        </div>
                    </div>
					:
					null
				}
				{
					this.state.show_modal
					?
					<div>
                        <Modal closeModal={() => this.setState({show_modal: false, close_block: false})}/>
                    </div>
					:
					null
				}
            </div>
        )
    }
}

export default ContactUs