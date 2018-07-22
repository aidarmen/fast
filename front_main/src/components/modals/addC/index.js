import React, {Component} from 'react'

import Modal from './modal'

class AddC extends Component{
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
					<div>
                        <button className="trigger add_button pointer color_white tac fs_33 mt_10px ml_5 absolute close_mobile" onClick={() => this.setState({show_modal: true})}>+</button>
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

export default AddC