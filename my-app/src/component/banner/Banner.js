import React, { Component } from "react";
import '../asset/css/header-banner.css';
import Header from '../header/Header';
import DetailGameHot from './detail-game-brief.js';

class Banner extends Component{
    constructor(props){
        super(props);
        this.state = {
            games: {"namegame": "jumanji",
                    "title": "JUMANJI",
                    "describe": "Trò chơi kỳ ảo là một bộ phim điện ảnh hài hước phiêu lưu hành động của Mỹ năm 2017 do Jake Kasdan đạo diễn và Kasdan, Chris McKenna, Erik Sommers, Scott Rosenberg cùng Jeff Pinkner thực hiện biên kịch từ nguyên tác gốc của McKenna",
                    "image": "url('https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_JumanjiTheVideoGame_enGB_image1600w.jpg')"
            }
        }
    }
    render(){
        const {games} = this.state;
        return(
            <div className="banner-component" style={{backgroundImage: games.image}}>
                <div className="banner-opacity"></div>
                <DetailGameHot games={games}></DetailGameHot>
                <Header/>
            </div>
        )}
}

export default Banner;