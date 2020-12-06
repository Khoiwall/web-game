import React, { Component } from "react";
import '../asset/css/content-homepage.css'
import GamesHot from '../content-homepage/aGame.js'

class listGameSearch extends Component{
    render(){
        const {listGameSearch} = this.props
        if(listGameSearch.length !== 0){
            return(
                <section className="brief-games">
                    <div className = "games-wraper">
                        <div className="container padding-left-right">
                            <div className="box-games">
                                <div className="games-model">
                                    <div className="item-navigation">
                                        <div className="nav">
                                            <h2>GAMES</h2>
                                        </div>
                                    </div>
                                    <div className="layout-list-games">
                                        {listGameSearch.map((game,index) =>(
                                            <GamesHot key={index} game={game}/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        else{
            return(
                <div className="brief-games">
                    <div className="container">
                        <h1>Không có kết quả tìm kiếm</h1>
                    </div>
                </div>
            )
        }
    }
}

export default listGameSearch;