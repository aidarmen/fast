import React, { Component } from 'react'

import Crs from './crs'

class Course extends Component {
    
    render() {
        return (
                <div >
                    <div className='w_container fl p_tb_30px block tac mt_60px'>
                        <div className='w_90 relative'>
                            <h1 className="color_white ff tac fs_65 fw_light ml_15">Выберите курс</h1>
                        </div>                        
                    </div>                   
                    <div className='w_container fl fl-c block tac mt_80px'>
                        {/* <Crs/> */}
                        <div className='w_40 fl fl-c'>
                            <div className="w_320px h_340px border_corse r_10px">
                                <img src="/img/html.png" className="course_img mt-25px" />
                                <h1 className="color_white ff tac fs_45 fwb mt_25px">HTML</h1>
                                <div className="h_75px">                                
                                <button className="bg_00bc71 tac color_white w_150px h_40px r_40px mt_30px bn ff fs_20">вход</button>
                                </div>
                            </div>
                        </div>
                        <div className='w_40 fl fl-c'>
                        <div className="w_320px h_340px border_corse r_10px">
                                <img src="/img/css.png" className="course_img mt-25px" />
                                <h1 className="color_white ff tac fs_45 fwb mt_25px">CSS</h1>
                                <div className="h_75px">                                
                                <button className="bg_00bc71 tac color_white w_150px h_40px r_40px mt_30px bn ff fs_20">вход</button>
                                </div>
                            </div>
                        </div>
                        <div className='w_40 fl fl-c'>
                        <div className="w_320px h_340px border_corse r_10px">
                                <img src="/img/js.png" className="course_img mt-25px" />
                                <h1 className="color_white ff tac fs_45 fwb mt_25px">JS</h1>
                                <div className="h_75px">                                
                                <button className="bg_00bc71 tac color_white w_150px h_40px r_40px mt_30px bn ff fs_20">вход</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                )
    }
}



export default Course
