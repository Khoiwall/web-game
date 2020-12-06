import React, { Component } from "react"
import Header from '../header/Header'
import '../asset/css/header-banner.css'

class BannerPageGame extends Component{
    render(){
        const {name} = this.props
        return(
            <div className="banner-component page-games">
                <div className="banner-opacity"></div>
                <Header name={name}/>
            </div>
        )}
}

export default BannerPageGame;