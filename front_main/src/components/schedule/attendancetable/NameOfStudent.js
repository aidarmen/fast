import React, {Component} from 'react';


class NameOfStudent extends Component{
	constructor(props){
        super(props)
        this.state = {
            name:[
                this.props.take
            ]

            
          }

	}
	componentWillMount(){
		
	}
    render() {
    return(
      


 this.state.name.map(function (name, index){
   return (  <tr className="h-56px" key={index}>
                      <td >
                        <span className="al_it-c flex ml-10 ">
                            <img className="avatar mr-5" src="/img/avatar.png" alt=""/> {name.fname} {name.lname}
                        </span>
                    </td> 
                    
                    <td className="col-9fc9b3 text_al-c" style={name.paid ? {color: ' '} : {color: 'red'}} > {name.paid ? 'оплатил' : 'ne оплатил'} 
                    </td>
                    </tr>
     )})

                  
                
                 

    );
    }
}

export default NameOfStudent