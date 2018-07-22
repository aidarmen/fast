import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class NotesTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment()
    }
    this.handleChange = this
      .handleChange
      .bind(this)
  }
  componentWillMount() {
    // axios.defaults.headers.common['Authorization'] =
    // localStorage.getItem('token') this.props.authActions.me()
  }

  handleChange(date) {
    this.setState({startDate: date});
  }
  render() {
    return (

      <div className="  bg_col-fcf7ef w-full bor-rad-10">

        <div className="w-90 ml-5 mr-10 h-full pt-2  ">

          <div className="flex w-full ">
            <div className="h-10px w-10 p-10px pr-0px capital">Дата:
            </div>
            <div className="h-10px w-full p-10px flex jc-fs">
              
              <DatePicker
                className="bor-rad-5 border-col-a7a6a5 mr-12px "
                selected={this.state.startDate}
                onChange={this.handleChange}
                type="text"/>
              <img width="20px" height="20px" src="/img/pencil.png" alt=""/>
            </div>
          </div>

          <div className="flex w-full">
            <div className="h-80 w-10 p-10px pr-0px capital">Занятие:
            </div>
            <div className="h-80 w-full p-10px">
              <textarea
                className="bor-rad-10 border-col-a7a6a5 p-10px w-90 "
                name=""
                id=""
                rows="10"
                placeholder="  text input"></textarea>
            </div>
          </div>

          <div className="flex w-full">
            <div className="h-80 w-10 p-10px pr-0px capital">Домашнее Задание:
            </div>
            <div className="h-80 w-full p-10px">
              <textarea
                className="bor-rad-10 border-col-a7a6a5 p-10px w-90"
                name=""
                id=""
                rows="10"
                placeholder="  text input"></textarea>
            </div>
          </div>

        </div>

      </div>

    );
  }
}

export default NotesTable