import React, { Component } from "react";
import '../asset/css/header-banner.css';
import Header from '../header/Header';


class BannerGame extends Component{
    render(){
        const {game,name} = this.props
        return(
            <div className="banner-component in-game" style={{backgroundImage: 'url("' + game.imageBackGournd + '")'}}>
                <div className="banner-opacity"></div>
                <Header name={name}/>
            </div>
        )}
}

export default BannerGame;