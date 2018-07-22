import React, {Component} from 'react';

    

class CurrentPosition extends Component{
	constructor(props){
        super(props)
        
        this.state = {
            underline: true
          }
	}
	componentWillMount(){
		
    }
    

    updateON(){
        this.props.onUpdate(true);
        this.setState({underline: true})
    }
    updateOFF(){
        this.props.onUpdate(false);
        this.setState({underline: false})
    }

    render() {
    return(
        <div className="table font-size-20 ml-5">
            <div className=" table-cell p-8px "  onClick={this.updateON.bind(this)} style={this.state.underline ? {textDecoration: 'underline', color: '#04476f' } : {textDecoration: 'none' } } >Посещаемость</div>
            <div className=" table-cell p-8px"  onClick={this.updateOFF.bind(this)} style={this.state.underline ? {textDecoration: 'none' } : {textDecoration: 'underline', color: '#04476f' } }  >Домашнее задание</div>
        </div>

    );
    }
}

export default CurrentPosition