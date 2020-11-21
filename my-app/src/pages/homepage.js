import React,{Component} from 'react';
import '../component/asset/css/header-banner.css';
import Banner from '../component/banner/Banner';
import Search from '../component/search/search';
import HighlightGame from '../component/content-homepage/highlight-games.js'
import GameUpdate from '../component/content-homepage/game-update.js'
import Footer from '../component/footer/footer.js'
import Loading from '../component/loader/loading.js'
import { Helmet } from 'react-helmet';
import axios from 'axios'
class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            listGame: [],
        }
    }
    componentWillMount(){
        axios.get('http://localhost:5000/games/list-game')
        .then(res=>{
            console.log(res)
            this.setState({
                listGame: res.data
            })
        })
        .catch(()=>console.log('khoi'))
    }
    render(){
        const {listGame} = this.state;
        console.log(listGame)
        function gameHighLight(){
            var gameHot = []
            var tmp = {}
            for(var i = 0; i < listGame.length; i++){
                for (var j = i+1; j < listGame.length; j++){
                    if (listGame[i].view < listGame[j].view){
                        tmp = listGame[i]
                        listGame[i] = listGame[j]
                        listGame[j] = tmp 
                    }
                }
            }
            for (var k = 0; k < 4; k++){
                gameHot.push(listGame[k])
            }
            return gameHot
        }
        if(listGame.length > 0){
            return(
                <div className="homepage">
                    <Helmet>
                        <title> GameFree - Cộng đồng game free </title>
                    </Helmet>
                    <div className="header banner relative">
                        <Banner game={gameHighLight()[0]}/>
                        <Search/>
                    </div>
                    <div className="content">
                        <HighlightGame gameHot={gameHighLight()}/>
                        <GameUpdate/>
                    </div>
                    <Footer/>
                </div>
            )
        }
        else{
            return(
                <Loading/>
            )
        }
    }
}

export default HomePage