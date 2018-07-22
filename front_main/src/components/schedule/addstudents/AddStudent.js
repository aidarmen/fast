import React, {Component} from 'react'

export class AddStudent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      displayAddStudents: this.props.display,
      allstudents: this.props.take

    }

  }

  componentWillMount() {}

  updateON() {
    this
      .props
      .onUpdate(false);

  }

  render() {

    return (
      <div
        style={this.props.display
        ? {
          display: ''
        }
        : {
          display: 'none'
        }}>

        <div className="table collapse w-full  ">
          <div className="table-row col-ffffff h-56px w-full ">
            <div className="table-cell bg_col-4a4a48 w-full  bor-rad-10">
              <div className="h-full flex  jc-sb">
                <div className="ml-5 flex al_it-c  font-weight-50 ">
                  <div className="search mt-2">
                    <div className="field-input">
                      <input className="color-white" type="text" placeholder="Search..."/>
                      <span className="fa fa-search"></span>
                    </div>
                  </div>
                </div>
                <span
                  className=" font-size-50 mr-5 "
                  onClick={this
                  .updateON
                  .bind(this)}>&times;</span>
              </div>
            </div>
          </div>
        </div>

        {this
          .state
          .allstudents
          .map(function (data, index) {
            return (
              <div className="table w-full bg_col-fcf9f0" key={index}>

                <div className="table-row  ">
                  <div
                    className="table-cell text_align-center vertical-align-middle p-10px  w-10 pl-5 ">
                    <img width="50px" height="50px" src="/img/avatar.png" alt=""/></div>
                  <div className="table-cell  vertical-align-middle p-10px w-85 bb-col-dad6d0">
                    <div className=" font-size-30">{data.fname} {data.lname}</div>
                  </div>
                  <div className="table-cell text_align-center vertical-align-middle  w-5 pr-5  ">
                    <div
                      className=" ml--10px pos-relative font-size-30 bor-rad-10 bg_col-f15930 w-30px h-30px flex jc-c al_it-c color-white "
                      style={data.added
                      ? {
                        background: 'green',
                        fontSize: '20px'
                      }
                      : {
                        background: ''
                      }}>
                      {data.added
                        ? ' ✓'
                        : '+'}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    )
  }
}

export default AddStudent
