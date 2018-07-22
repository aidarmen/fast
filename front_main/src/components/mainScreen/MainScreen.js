import React, { Component } from 'react'

export class MainScreen extends Component {
  render() {
    return (
        <div className="container-fluid">
        <div className="header">

            <div>
            <img src="/img/logo.png" alt=""/>
            </div>
            <div>
                <input type="text" className="form-control" id="usr" style={{width: "400px"}} placeholder="Введите куда бы вы хотели?"/>
            </div>
            <div>
                <img
                    src="/img/avatar.jpg"
                    className="img-circle" alt="Cinque Terre"
                    width="100" height="100"/>
            </div>
        </div>
        <div className="controlPane">
            <div className="controlPaneItem">
                <p className="regular">Мои объявления</p>
            </div>
            <div className="controlPaneItem">
                <p className="regular">Другие объявления</p>
            </div>
            <div className="controlPaneItem active">
                <p>Мои встречи</p>
            </div>
        </div>
    </div>
    )
  }
}

export default MainScreen
