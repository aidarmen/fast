import React, {Component} from 'react';

    

class NameOfGroup extends Component{
	constructor(props){
        super(props)
        
        this.state = {
            groupname: this.props.take
        }

        
	}
	componentWillMount(){
		// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
		// this.props.authActions.me()
	}
    render() {
    return(
      
        <div className="flex jc-c w-full pt-35px pb-20px mt-2">
        <div className="text-transform-uppercase font-size-30 font-weight-800 col-5d5c57 bor-rad-10 flex w-30 h-160px  bg_col-fcf9f0 jc-c al_it-c">
            {this.state.groupname}

        </div>
    </div>

    );
    }
}

export default NameOfGroup