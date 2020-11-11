import React,{Component} from 'react';
import '../component/asset/css/header-banner.css';
import Banner from '../component/banner/Banner';
import Search from '../component/search/search';
import HighlightGame from '../component/content-homepage/highlight-games.js'
import GameUpdate from '../component/content-homepage/game-update.js'
import Footer from '../component/footer/footer.js'
import { Helmet } from 'react-helmet';
class HomePage extends Component{
    render(){
        return(
            <div className="homepage">
                <Helmet>
                    <title> GameFree - Cộng đồng game free </title>
                </Helmet>
                <div className="header banner relative">
                    <Banner/>
                    <Search/>
                </div>
                <div className="content">
                    <HighlightGame/>
                    <GameUpdate/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default HomePage