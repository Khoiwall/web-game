import React, { Component } from "react";
import '../asset/css/header-banner.css';
import Header from '../header/Header';
import DetailGameHot from './detail-game-brief.js';

class Banner extends Component{
    render(){
        const {game,name} = this.props
        return(
            <div className="banner-component" style={{backgroundImage: 'url("' + game.imageBackGournd + '")'}}>
                <div className="banner-opacity"></div>
                <DetailGameHot game={game}></DetailGameHot>
                <Header name={name}/>
            </div>
        )}
}

export default Banner;