import React, {Component} from 'react';
import Checkbox from './Checkbox';

class StudentAtendance extends Component{
	constructor(props){
        super(props)
        this.state = {
           student: this.props.take 
    }
	}
	componentWillMount(){
		
	}
    render() {
    return(
      
        <tr className="h-56px">
 {this.state.student.map(function (data, index){
            return ( 
                             <Checkbox checked={data.attended} key={index}/>
            )})
        }  
                
                   </tr>   
                   
                   
                 

    );
    }
}

export default StudentAtendance