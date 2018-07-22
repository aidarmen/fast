import React, {Component} from 'react';


class Date extends Component{
	constructor(props){
        super(props)
        this.state = {
            date: this.props.take          
          }
	}
	componentWillMount(){
		// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
		// this.props.authActions.me()
	}
    render() {
        console.log(this.state.date )
        console.log("here" )
    return(
       
<tr className="h-56px col-white"> 
                    
{this.state.date.map(function (data,index){
            return ( 
                    <td className="bg_col-4a4a48" key={index}>
                        <div className=" block">
                                <div className="font-size-12 font-weight-700 flex jc-c">{data.day}</div>
                                <hr className="small-v-l "/>
                                <div className="font-size-11 font-weight-200 flex jc-c">{data.time}</div>
                            </div>
                        </td>

             );})} 
                    </tr>

    );
    }
}

export default Date