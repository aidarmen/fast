import React, {Component} from 'react';
import Head from '../login/head'

import NameOfGroup from './NameOfGroup';
import CurrentPosition from './CurrentPosition';
import AttendanceTable from './attendancetable/AttendanceTable';
import NotesTable from './notestable/NotesTable';

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fieldVal: true
      
    }
  }

  componentWillMount(){
    this.props.allCourse()
 }


 

  onUpdate = (val) => {
    this.setState({fieldVal: val})

    console.log(val)
  };
  render() {
    return (
      <div>

        <Head/>

        <section className=" ml-10 mr-10 mt-2">

          <NameOfGroup take={this.state.groupname}/>

          <CurrentPosition onUpdate={this
            .onUpdate
            .bind(this)}/> {this.state.fieldVal
            ? <AttendanceTable
                allstudents={this.state.allstudents}
                name={this.state.name}
                date={this.state.date}/>
            : <NotesTable/>}

        </section>

      </div>

    );
  }
}

export default Main