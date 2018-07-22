import React, {Component} from 'react'

import Modal from './modal'


class AddG extends Component{
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
                        <button className="trigger add_button pointer color_white tac fs_33 mr_5px" onClick={() => this.setState({show_modal: true})}>+</button>
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


export default AddG