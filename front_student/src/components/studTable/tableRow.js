import React, {Component} from 'react'

class Row extends Component {
    render() {
        return(
            <div className="table_row w_100 h_45px bg_white h_100px">  
                <div className="table_cell w_20 ff fs_15 color_black va_m border_tr border_tb">
                <h1 className="ff fs_20">{this.props.date.duration}</h1>
                <h1 className="ff fs_15 mt_10px">{this.props.date.timeFromHour}:{this.props.date.timeFromMin} - {this.props.date.timeUntilHour}:{this.props.date.timeUntilMin}</h1>
                </div>
                <div className="table_cell w_40 ff fs_15 color_black va_m border_tr border_tb">Занятие</div>
                <div className="table_cell w_40 ff fs_15 color_black va_m border_tb">Домашнее задание</div>
            </div>
            
        )
    }
}

export default Row