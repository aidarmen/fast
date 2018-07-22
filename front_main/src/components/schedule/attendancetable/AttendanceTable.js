import React, {Component} from 'react';

import Date from './Date';
import StudentAtendance from './StudentAtendance';
import NameOfStudent from './NameOfStudent';
import AddStudent from '../addstudents/AddStudent'

class AttendanceTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayAddStudents: false,
      name: this.props.name,
      allstudents: this.props.allstudents,
      date: [this.props.date]

    }
    console.log(this.state.date)
  }
  componentWillMount() {}

  onUpdate = (val) => {
    this.setState({displayAddStudents: val})
  }
  update() {
    this.setState({displayAddStudents: true});
  }

  render() {

    console.log(this.state.allstudents)
    return (

      <div id="container  " className=" ">
        <table
          className=" collapse w-full  bg_col-fcf9f0 p-30px  "
          id="name"
          cellSpacing="0"
          cellPadding="0"
          style={this.state.displayAddStudents
          ? {
            display: "none"
          }
          : {
            display: ""
          }}>

          <tr className="h-56px col-white   ">

            <td className="bg_col-4a4a48 bor-rad-10-l">
              <div className=" ">
                <div className="h-full flex  jc-sb">
                  <div className="ml-10 flex al_it-c font-weight-50 ">Студенты</div>
                  <span
                    className="mr-10 font-size-30 "
                    onClick={this
                    .update
                    .bind(this)}>+</span>
                </div>
              </div>
            </td>

            <td className="bg_col-4a4a48  m-a w-14 font-weight-50 text_al-c">
              Статусы

            </td>

          </tr>

          {this
            .state
            .name
            .map(function (data, index) {
              return (<NameOfStudent take={data} key={index}/>)
            })
}

        </table>

        <div id="wrap" className="">
          <table
            className="collapse w-full bg_col-fcf9f0"
            id="data"
            cellSpacing="0"
            cellPadding="0"
            style={this.state.displayAddStudents
            ? {
              display: "none"
            }
            : {
              display: ""
            }}>

            {this
              .state
              .date
              .map(function (data, index) {
                return (<Date take={data} key={index}/>);
              })
}
            {this
              .state
              .name
              .map(function (data, index) {

                return (<StudentAtendance key={index} take={data.attendance}/>)
              })
}
          </table>
        </div>

        <AddStudent
          display={this.state.displayAddStudents}
          take={this.state.allstudents}
          onUpdate={this
          .onUpdate
          .bind(this)}/>

      </div>
    );
  }
}

export default AttendanceTable