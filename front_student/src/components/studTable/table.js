import React, { Component } from 'react'

import Row from './tableRow'

class Table extends Component {
     constructor(props) {
         super(props)         
    }

    render() {
        return (
            <div className='w_container fl fl-c block tac mt_30px'>
            <div className="bg_3b4141 w_100 h_45px border_table table">
                <div className="table_row w_100 h_45px">
                    <div className="table_cell w_20 ff fs_15 color_white va_m border_tr">Дата</div>
                    <div className="table_cell w_40 ff fs_15 color_white va_m border_tr">Занятие</div>
                    <div className="table_cell w_40 ff fs_15 color_white va_m">Домашнее задание</div>
                </div>
                {/* <Row />            */}
                <div className="table_row w_100 h_45px bg_white h_100px">  
                   <div className="table_cell w_20 ff fs_15 color_black va_m border_tr border_tb">Дата</div>
                    <div className="table_cell w_40 ff fs_15 color_black va_m border_tr border_tb">Занятие</div>
                    <div className="table_cell w_40 ff fs_15 color_black va_m border_tb">Домашнее задание</div>
                 </div>
            </div>
        </div> 
        )
    }

}

export default Table

// export default () => {
//     return (
//         <div className='w_container fl fl-c block tac mt_30px'>
//             <div className="bg_3b4141 w_100 h_45px border_table table">
//                 <div className="table_row w_100 h_45px">
//                     <div className="table_cell w_20 ff fs_15 color_white va_m border_tr">Дата</div>
//                     <div className="table_cell w_40 ff fs_15 color_white va_m border_tr">Занятие</div>
//                     <div className="table_cell w_40 ff fs_15 color_white va_m">Домашнее задание</div>
//                 </div>
//                 <div className="table_row w_100 h_45px bg_white h_100px">  
//                     <div className="table_cell w_20 ff fs_15 color_black va_m border_tr border_tb">Дата</div>
//                     <div className="table_cell w_40 ff fs_15 color_black va_m border_tr border_tb">Занятие</div>
//                     <div className="table_cell w_40 ff fs_15 color_black va_m border_tb">Домашнее задание</div>
//                 </div>
//                 <div className="table_row w_100 h_45px bg_white h_100px">  
//                     <div className="table_cell w_20 ff fs_15 color_black va_m border_tr border_tb">Дата</div>
//                     <div className="table_cell w_40 ff fs_15 color_black va_m border_tr border_tb">Занятие</div>
//                     <div className="table_cell w_40 ff fs_15 color_black va_m border_tb">Домашнее задание</div>
//                 </div>
//             </div>
//         </div>
//     )
// }